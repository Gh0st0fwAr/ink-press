export default function Home() {
  return (
    <main className="content">
      <section className="hero">
        <p className="eyebrow">Portfolio pet · Next.js</p>
        <h1 className="title">Ink Press</h1>
        <p className="lead">
          Публичная лента материалов и админка. Каркас готов — логика пойдёт шагами из{' '}
          <code>LEARNING.md</code>.
        </p>
      </section>

      <section className="grid" aria-label="Что будет в проекте">
        <article className="card">
          <h2>Публичка</h2>
          <p>Лента, теги, поиск и страница поста на App Router.</p>
        </article>
        <article className="card">
          <h2>Админка</h2>
          <p>CRUD, черновик / опубликовано, учебный вход.</p>
        </article>
        <article className="card">
          <h2>Стек позже</h2>
          <p>Node API и PostgreSQL — после mock и React-слоя.</p>
        </article>
      </section>
    </main>
  )
}
