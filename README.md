# Public Resume Template

React + TypeScript resume renderer designed to keep real personal data out of public git history. The app renders Russian and English resume versions, supports a private local content override, and exports PDF plus PNG previews through a Playwright automation script.

## Portfolio focus

- Typed resume content model in `src/content/types.ts`.
- Language switching through `?lang=ru` and `?lang=en`.
- Public/private content split so sensitive resume data stays in `resume.private.ts`.
- Print-oriented CSS for clean A4 PDF output.
- Headless export script that builds the app, serves `dist`, and captures PDFs/screenshots.

## Tech stack

- React 19
- TypeScript
- Vite 7
- Playwright
- CSS for screen and print layouts

## Run locally

```bash
npm install
npm run dev
```

Open one of the localized views:

```text
http://localhost:5173/?lang=ru
http://localhost:5173/?lang=en
```

## Export PDF

```bash
npm run export:pdf
```

Generated files are written to:

```text
output/pdf/resume-ru.pdf
output/pdf/resume-en.pdf
output/pdf/resume-ru-preview.png
output/pdf/resume-en-preview.png
```

## Private data workflow

1. Copy `src/content/resume.private.example.ts` to `src/content/resume.private.ts`.
2. Fill `resumeRu` and `resumeEn` with real data locally.
3. Keep `src/content/resume.private.ts` out of git.
4. Use the public sample files only as a reusable template.

## Project structure

```text
src/App.tsx                         resume rendering components
src/content/index.ts                public/private content selection
src/content/resume.ru.ts            public Russian sample content
src/content/resume.en.ts            public English sample content
src/content/resume.private.example.ts private-content example
src/styles/base.css                 screen layout
src/styles/print.css                print/PDF layout
scripts/export-pdf.mjs              PDF and PNG export automation
```

## Reuse

The repository is published as a privacy-safe resume template. Fork it, replace the sample data through the private content file, and export localized PDFs without committing real contact details or job-search data.
