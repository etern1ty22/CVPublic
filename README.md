# Resume Template

Публичная версия этого репозитория обезличена. Настоящие данные резюме нужно хранить в локальном файле `src/content/resume.private.ts`, который не попадёт в git.

## Локальные приватные данные

1. Скопируйте `src/content/resume.private.example.ts` в `src/content/resume.private.ts`.
2. Заполните `resumeRu` и `resumeEn` своими данными.
3. Запускайте проект и экспорт PDF как обычно. Приложение автоматически возьмёт приватный файл, если он существует.

## Безопасная публикация на GitHub

1. Инициализируйте git: `git init -b main`
2. Перед первым коммитом настройте локальную публичную идентичность:
   `git config user.name "your-github-username"`
   `git config user.email "123456+your-github-username@users.noreply.github.com"`
3. Проверьте, что приватный файл и артефакты не попадают в индекс: `git status --short`
4. После этого можно делать коммит, создавать GitHub-репозиторий и пушить.
