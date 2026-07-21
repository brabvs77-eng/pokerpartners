# Poker Partners Landing

Полная копия лендинга [pokerpartners.io](https://pokerpartners.io/) для деплоя на новый домен.

## Стек

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Страницы

| URL | Описание |
|-----|----------|
| `/` | Главная (RU) |
| `/en` | Главная (EN) |
| `/terms` | Пользовательское соглашение |
| `/privacy` | Политика конфиденциальности |
| `/en/terms` | User agreement |
| `/en/privacy` | Privacy policy |

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm start
```

## Настройка ссылок

Внешние ссылки (кабинет, регистрация, Telegram, email) задаются в `src/lib/links.ts`.
