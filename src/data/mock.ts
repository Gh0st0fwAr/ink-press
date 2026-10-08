import type { Post } from './types'

export const mockData: Post[] = [
  {
    id: '1',
    title: 'Зачем App Router после привычного SPA',
    slug: 'why-app-router',
    excerpt:
      'Коротко: серверные компоненты, layouts и меньше клиентского JS. Разбор без святой войны Vite vs Next.',
    body:
      'Если ты долго писал SPA на Vue или React Router, App Router сначала кажется странным: страница — файл, оболочка — layout, а children подставляется фреймворком.\n\n' +
      'Выигрыш не в «модности», а в разделении труда. Статика и данные могут собраться на сервере, а интерактив — точечными client-островами. ' +
      'Для ленты постов это особенно удобно: HTML приезжает сразу, а фильтры можно добавить позже отдельным клиентским куском.\n\n' +
      'На практике важно не тащить useState в каждый page.tsx. Сначала спроси: этому куску нужен браузер? Если нет — оставь Server Component.',
    tags: ['next', 'react', 'architecture'],
    status: 'published',
    createdAt: '2026-01-12',
    updatedAt: '2026-01-18',
  },
  {
    id: '2',
    title: 'Server Components без мистики',
    slug: 'server-components-plain',
    excerpt:
      'Что можно и нельзя на сервере, почему params иногда Promise, и чем это отличается от «просто SSR».',
    body:
      'Server Component выполняется на сервере (или на этапе сборки) и не уезжает в браузер как интерактивный бандл с хуками.\n\n' +
      'Можно: читать данные, импортировать тяжёлые утилиты только для сервера, отдавать готовый JSX.\n' +
      'Нельзя: useState, useEffect, обработчики onClick на этом же компоненте — для этого нужен клиентский потомок с директивой "use client".\n\n' +
      'params у динамических страниц в новых Next часто приходят как Promise: их await-ят в async page. Это не баг типизации, а контракт рантайма. ' +
      'Если сомневаешься — смотри ошибку TypeScript и docs именно своей мажорной версии Next.',
    tags: ['next', 'react', 'typescript'],
    status: 'published',
    createdAt: '2026-01-20',
    updatedAt: '2026-02-02',
  },
  {
    id: '3',
    title: 'Моделируем Post до базы данных',
    slug: 'model-post-before-db',
    excerpt:
      'id, slug, status, tags — минимальный контракт, который потом спокойно ляжет на PostgreSQL.',
    body:
      'Пока нет Postgres, тип Post уже должен быть честным. slug нужен для URL и уникален в рамках публички. ' +
      'status отделяет draft от published — публичная лента не должна светить черновики.\n\n' +
      'tags как string[] — простой старт. Позже в SQL это может стать связью many-to-many, но UI и фильтры можно отрабатывать уже на mock.\n\n' +
      'excerpt — для карточки, body — для detail. Не дублируй смысл: карточка продаёт клик, страница отдаёт текст.',
    tags: ['typescript', 'architecture', 'postgres'],
    status: 'published',
    createdAt: '2026-02-05',
    updatedAt: '2026-02-05',
  },
  {
    id: '4',
    title: 'Черновик: заметки про auth в админке',
    slug: 'draft-admin-auth-notes',
    excerpt: 'Не публиковать. Набросок учебного логина без OAuth.',
    body:
      'TODO: cookie-сессия, проверка на /admin, редирект на /login. ' +
      'Пока это draft — в публичной ленте и по прямому slug отдавать 404/not found.',
    tags: ['next', 'auth', 'admin'],
    status: 'draft',
    createdAt: '2026-02-10',
    updatedAt: '2026-02-11',
  },
  {
    id: '5',
    title: 'От mock к Node и PostgreSQL',
    slug: 'from-mock-to-node-postgres',
    excerpt:
      'Зачем сначала стабилизировать UI на фикстурах, и как потом заменить слой данных без переписывания карточек.',
    body:
      'Стратегия пета: сначала карточки, detail и фильтры на mockData. Когда контракт устаканится — поднимаем Node API и PostgreSQL.\n\n' +
      'Карточка и page не должны знать, откуда массив: из файла или из fetch("/api/posts"). ' +
      'Скрывай источник за функцией вроде getPublishedPosts() — хоть она пока просто фильтрует mock.\n\n' +
      'В резюме потом честно: REST на Node, SQL в Postgres, а не «фронт умеет localStorage».',
    tags: ['postgres', 'node', 'architecture'],
    status: 'published',
    createdAt: '2026-02-14',
    updatedAt: '2026-02-20',
  },
  {
    id: '6',
    title: 'Теги и пересечения: задел под фильтр',
    slug: 'tags-overlap-for-filters',
    excerpt:
      'Одинаковые теги на разных постах — не случайность. На шаге фильтров это даст живой дрилл.',
    body:
      'Если у каждого поста уникальные теги, фильтр по тегу скучный: либо пусто, либо одна карточка.\n\n' +
      'Здесь next, react, typescript, architecture и postgres специально пересекаются. ' +
      'Когда дойдёшь до client island с выбором тега — сразу увидишь, как filter сужает ленту.\n\n' +
      'Не усложняй заранее: пока достаточно массива строк. Нормализация регистра (React vs react) — отдельное решение на шаге UI.',
    tags: ['react', 'typescript', 'next'],
    status: 'published',
    createdAt: '2026-02-22',
    updatedAt: '2026-02-22',
  },
]
