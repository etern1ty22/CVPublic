# Resume Template

Публичная версия этого репозитория обезличена. Настоящие данные резюме нужно хранить в локальном файле `src/content/resume.private.ts`, который не попадёт в git.

Anyone can fork this repository, use it as a template, and adapt it for personal or commercial work under the terms of the Unlicense.

## Локальные приватные данные

1. Скопируйте `src/content/resume.private.example.ts` в `src/content/resume.private.ts`.
2. Заполните `resumeRu` и `resumeEn` своими данными.
3. Запускайте проект и экспорт PDF как обычно. Приложение автоматически возьмёт приватный файл, если он существует.

## Безопасная публикация на GitHub

1. Перед первым коммитом настройте локальную публичную идентичность:
   `git config user.name "your-github-username"`
   `git config user.email "123456+your-github-username@users.noreply.github.com"`
2. Проверьте, что приватный файл и артефакты не попадают в индекс: `git status --short`
3. После этого можно делать коммит, создавать GitHub-репозиторий и пушить.

## Reuse

- Fork the repository or enable "Template repository" in GitHub settings.
- Keep your real resume data only in `src/content/resume.private.ts`.
- Public commits can be attributed to your GitHub account with a GitHub `noreply` email instead of a personal mailbox.
