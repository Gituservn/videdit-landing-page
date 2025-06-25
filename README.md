# Встановлені пакети для проєкту

- `husky` — для git хуків  
- `lint-staged` — запуск лінтера і форматування тільки на staged файлах  
- `eslint` — статичний аналіз коду (лінт)  
- `prettier` — автоформатування коду  
- `@typescript-eslint/parser` — парсер ESLint для TypeScript  
- `@typescript-eslint/eslint-plugin` — плагін ESLint для TypeScript  
- `eslint-plugin-astro` — ESLint плагін для Astro файлів  
- `eslint-plugin-react` — ESLint плагін для React JSX/TSX  
- `commitlint` та `@commitlint/config-conventional` — перевірка формату комітів  

---

# Формат комітів (Conventional Commits)

### Типи комітів:

- `feat` — нова функціональність  
- `fix` — виправлення багів  
- `docs` — зміни в документації  
- `style` — зміни форматування, пробілів, відступів (без змін коду)  
- `refactor` — зміни коду, які не додають нової функціональності і не виправляють баги  
- `test` — додавання або зміна тестів  
- `chore` — допоміжні зміни, оновлення інструментів, налаштувань  

### Приклади:
feat: додано нову секцію в лендинг
fix: виправлено баг з кнопкою
docs: оновлено README
style: відформатовано код prettier
refactor: оптимізовано логіку авторизації
test: додано юніт тести для компонента Button
chore: оновлено залежності
