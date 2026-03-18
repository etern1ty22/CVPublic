import type { ResumeData } from './types';

export const resumeRu: ResumeData = {
  basics: {
    name: 'Имя Фамилия',
    title: 'Frontend Developer',
    location: 'Город, страна',
    subtitle:
      'Кратко опишите профиль: специализацию, ключевой стек, сильные стороны и формат задач, которые умеете доводить до результата.',
  },
  summary: ['Здесь можно коротко описать текущую роль, релевантный опыт и какую позицию вы ищете.'],
  highlights: ['3+ года опыта', 'React / TypeScript', 'English B2+'],
  education: {
    institution: 'Университет или образовательная программа',
    degree: 'Специализация или степень',
    period: '2020 - 2024',
    details: [
      'Ключевые курсы, достижения или специализация',
      'Средний балл, диплом или академические результаты',
      'Дополнительные программы, сертификаты или языки',
    ],
  },
  experience: [
    {
      company: 'Product Company',
      role: 'Frontend Developer',
      period: '2023 - настоящее время',
      summary:
        'Кратко опишите компанию, продукт и зону ответственности, чтобы сразу был понятен масштаб и контекст вашей работы.',
      bullets: [
        'Опишите 2-4 ключевых сценария, которыми вы владели end-to-end.',
        'Добавьте конкретику про интеграции, архитектурные решения, состояние или качество.',
        'Укажите измеримый результат: скорость, конверсия, стабильность или покрытие тестами.',
      ],
    },
  ],
  projects: [
    {
      name: 'Portfolio Project',
      role: 'Frontend Developer',
      period: '2022 - 2023',
      summary:
        'Кратко опишите проект, домен и пользовательскую задачу, которую он решает.',
      bullets: [
        'Опишите свой вклад, стек и наиболее заметные пользовательские сценарии.',
        'Добавьте детали про архитектуру, API, инфраструктуру или CI/CD.',
        'Если есть метрики или результат, зафиксируйте его здесь.',
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
      label: 'Телеграм',
      shortLabel: '@username',
      href: 'https://t.me/username',
    },
    {
      label: 'Почта',
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
