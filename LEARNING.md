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
- [ ] **4. Route groups** — `(public)` / `(admin)` layouts
- [ ] **5. Admin list** — таблица постов
- [ ] **6. Admin form create** — RHF
- [ ] **7. Edit + status** — draft / published
- [ ] **8. Persist** — переход с mock на API
- [ ] **9. Backend** — Node (Express или аналог) + **PostgreSQL** (SQL руками / `pg`, без Supabase/Prisma как ядра)
- [ ] **10. Auth gate** — учебный логин в admin
- [ ] **11. UX states** — loading / error / empty
- [ ] **12. Deploy + README** — фронт (Vercel и т.п.) + API/БД на free tier

**Ориентир бэка (зафиксировано):** Node + PostgreSQL «в чистом виде» — чаще так пишут в вакансиях. Prisma/Supabase не цель пета (можно упомянуть позже, если сами захотим).

Шаги уточним по ходу; порядок может чуть съехать под Next-детали.

## Запуск

```bash
cd ink-press
npm install
npm run dev
```
