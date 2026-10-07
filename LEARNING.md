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
- [ ] **1. Домен + mock** — типы `Post`, seed, публичный список (Server Component)
- [ ] **2. Detail** — `/posts/[slug]`
- [ ] **3. Фильтры** — поиск / теги (client island)
- [ ] **4. Route groups** — `(public)` / `(admin)` layouts
- [ ] **5. Admin list** — таблица постов
- [ ] **6. Admin form create** — RHF
- [ ] **7. Edit + status** — draft / published
- [ ] **8. Persist** — storage или простой JSON/API-слой
- [ ] **9. Auth gate** — учебный логин в admin
- [ ] **10. UX states** — loading / error / empty
- [ ] **11. Deploy + README** — Vercel или Pages-аналог

Шаги уточним по ходу; порядок может чуть съехать под Next-детали.

## Запуск

```bash
cd ink-press
npm install
npm run dev
```
