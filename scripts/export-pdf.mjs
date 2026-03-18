import { createServer } from 'node:http';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const outputDir = path.join(rootDir, 'output', 'pdf');
const host = '127.0.0.1';
const port = 4173;
const exports = [
  {
    lang: 'ru',
    pdfPath: path.join(outputDir, 'resume-ru.pdf'),
    pngPreviewPath: path.join(outputDir, 'resume-ru-preview.png'),
  },
  {
    lang: 'en',
    pdfPath: path.join(outputDir, 'resume-en.pdf'),
    pngPreviewPath: path.join(outputDir, 'resume-en-preview.png'),
  },
];
const chromeCandidates = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].filter(Boolean);
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const resolveAssetPath = (requestUrl = '/') => {
  const normalizedPath = decodeURIComponent(requestUrl.split('?')[0] || '/');
  const relativePath = normalizedPath === '/' ? 'index.html' : normalizedPath.replace(/^\/+/, '');
  const absolutePath = path.resolve(distDir, relativePath);

  if (!absolutePath.startsWith(distDir)) {
    return null;
  }

  return absolutePath;
};

const server = createServer(async (request, response) => {
  const assetPath = resolveAssetPath(request.url);

  if (!assetPath) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  try {
    const fileContent = await readFile(assetPath);
    const extension = path.extname(assetPath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[extension] ?? 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    response.end(fileContent);
  } catch {
    response.writeHead(404);
    response.end('Not found');
  }
});

const listen = () =>
  new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, host, () => {
      server.off('error', reject);
      resolve();
    });
  });

await mkdir(outputDir, { recursive: true });
const executablePath = chromeCandidates.find((candidate) => existsSync(candidate));
await listen();

const browser = await chromium.launch({
  headless: true,
  executablePath,
  args: ['--disable-dev-shm-usage', '--disable-gpu', '--no-sandbox'],
});

try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1600 },
  });

  await page.emulateMedia({ media: 'print' });

  for (const item of exports) {
    await page.goto(`http://${host}:${port}/?lang=${item.lang}`, { waitUntil: 'networkidle' });
    await page.waitForSelector('html[data-app-ready="true"]');
    await page.waitForTimeout(150);
    await page.pdf({
      path: item.pdfPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    await page.locator('.resumePage').screenshot({
      path: item.pngPreviewPath,
    });

    console.log(`PDF exported to ${item.pdfPath}`);
    console.log(`PNG preview exported to ${item.pngPreviewPath}`);
  }
} finally {
  await browser.close();
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
}
