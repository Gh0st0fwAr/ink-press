# Ink Press — LEARNING

Пет: публичный блог/лента + админка (Next.js App Router + React 19 + TypeScript).  
Формат как Signal Shelf: теория в чате → ты пишешь логику → ревью.

## Роли

| Кто | Делает |
|-----|--------|
| **Ты** | Логика: страницы, data-слой, формы, query/fetch, типы, фильтры |
| **Наставник (агент)** | Оболочки layout/UI, токены, развёрнутая теория в чате |

## Как работать шаг

1. Теория **в чате**.
2. Код шага пишешь сам.
3. «Шаг N готов» → ревью и следующий.
4. Логику шага «сделай за меня» — только по явной просьбе.

## Чеклист микрошагов

- [x] **0. Setup** — Next App Router, `src/`, SCSS tokens, git + origin *(наставник)*
- [x] **1. Домен + mock** — типы `Post`, seed, публичный список (Server Component)
- [x] **2. Detail** — `/posts/[slug]`
- [x] **3. Фильтры** — поиск / теги (client island)
- [x] **4. Route groups** — `(public)` / `(admin)` layouts
- [x] **5. Admin list** — таблица постов (пока на mock)
- [ ] **6. Backend + PostgreSQL** — Express (или аналог), таблица `posts`, SQL через `pg`
- [ ] **7. API read** — `GET` список / один пост; админ-таблица и публичка читают API вместо mock
- [ ] **8. Admin form create** — RHF → `POST` в API (сразу в БД, без in-memory)
- [ ] **9. Edit + status** — форма/действия → `PATCH` (draft / published)
- [ ] **10. Auth gate** — учебный логин в admin
- [ ] **11. UX states** — loading / error / empty
- [ ] **12. Deploy + README** — фронт + API/БД на free tier

**Почему так переставили:** create/edit на `useState(mock)` пришлось бы выкинуть при появлении API. Сначала поднимаем БД и чтение, затем форма сразу пишет в REST — меньше переделок и ближе к боевому циклу «React → fetch → Node → Postgres».

**Ориентир бэка (зафиксировано):** Node + PostgreSQL «в чистом виде» — чаще так пишут в вакансиях. Prisma/Supabase не цель пета (можно упомянуть позже, если сами захотим). API живёт в том же репо: папка `server/` (отдельный процесс), фронт — Next как сейчас.

Шаги уточним по ходу; порядок может чуть съехать под Next-детали.

## Запуск

```bash
cd ink-press
npm install
npm run dev
```

Бэк (когда появится `server/`):

```bash
cd server
npm install
npm run dev
```
