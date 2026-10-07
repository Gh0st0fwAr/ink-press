export default function Home() {
  return (
    <main className="mx-auto flex min-h-full max-w-2xl flex-col justify-center gap-6 px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
        Portfolio pet · Next.js
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
        Ink Press
      </h1>
      <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Публичная лента и админка. Каркас Next готов — логика пойдёт шагами из{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-[0.95em] dark:bg-zinc-900">
          LEARNING.md
        </code>
        .
      </p>
      <ul className="list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
        <li>App Router + TypeScript + Tailwind</li>
        <li>Дальше: mock постов, detail, admin CRUD, auth gate</li>
      </ul>
    </main>
  )
}
