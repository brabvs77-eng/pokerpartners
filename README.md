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

Сборка (статический экспорт в `out/`):

```bash
npm run build
```

## Cloudflare Pages

| Параметр | Значение |
|----------|----------|
| Framework preset | **Next.js (Static HTML Export)** |
| Production branch | `main` (после merge) или текущая ветка с кодом |
| Build command | `npx next build` или `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (пусто) |
| Node.js version | `18` или `20` |

Не используйте `npx @cloudflare/next-on-pages@1` — для этого лендинга нужен статический экспорт.

## Настройка ссылок

Внешние ссылки (кабинет, регистрация, Telegram, email) задаются в `src/lib/links.ts`.

## SEO / домен

В Cloudflare Pages → Settings → Environment variables добавьте:

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://ваш-домен.com` (без `/` в конце) |

От этого зависят canonical, Open Graph, `sitemap.xml` и `robots.txt`.
