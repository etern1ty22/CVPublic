import type { ResumeData } from './types';

export const resumeEn: ResumeData = {
  basics: {
    name: 'First Last Name',
    title: 'Frontend Developer',
    location: 'City, Country',
    subtitle:
      'Use this space for a short positioning statement: focus area, core stack, strengths, and the kind of product work you handle end-to-end.',
  },
  summary: ['Use this paragraph to summarize your current role, relevant experience, and the role you want next.'],
  highlights: ['3+ years of experience', 'React / TypeScript', 'English B2+'],
  education: {
    institution: 'University or learning program',
    degree: 'Degree or specialization',
    period: '2020 - 2024',
    details: [
      'Relevant coursework, specialization, or academic focus',
      'GPA, honors, diploma, or other notable results',
      'Certificates, exchange programs, or languages',
    ],
  },
  experience: [
    {
      company: 'Product Company',
      role: 'Frontend Developer',
      period: '2023 - Present',
      summary:
        'Describe the product, your team context, and the area of responsibility that best signals your level.',
      bullets: [
        'List 2-4 meaningful flows or systems you owned end-to-end.',
        'Mention architecture, API integration, state management, testing, or performance work.',
        'Include a measurable outcome when possible.',
      ],
    },
  ],
  projects: [
    {
      name: 'Portfolio Project',
      role: 'Frontend Developer',
      period: '2022 - 2023',
      summary:
        'Describe the project, domain, and the user problem it solves.',
      bullets: [
        'Highlight your contribution, stack, and the most visible user scenarios.',
        'Add architecture, backend integration, infrastructure, or CI/CD details.',
        'If you have metrics or impact, include them here.',
      ],
      links: [
        {
          label: 'Repository',
          href: 'https://example.com/project',
        },
      ],
    },
  ],
  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'Redux Toolkit',
    'RTK Query',
    'Vite',
    'CSS Modules',
    'REST API',
    'Vitest',
    'Playwright',
    'Git',
    'FSD',
  ],
  links: [
    {
      label: 'Telegram',
      shortLabel: '@username',
      href: 'https://t.me/username',
    },
    {
      label: 'Email',
      shortLabel: 'name@example.com',
      href: 'mailto:name@example.com',
    },
    {
      label: 'GitHub',
      shortLabel: 'github.com/username',
      href: 'https://github.com/username',
    },
  ],
};
