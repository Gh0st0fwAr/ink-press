export default function Home() {
  return (
    <main className="home">
      <p className="home__eyebrow">Portfolio pet · Next.js</p>
      <h1 className="home__title">Ink Press</h1>
      <p className="home__lead">
        Публичная лента и админка. Каркас Next готов — логика пойдёт шагами из{' '}
        <code>LEARNING.md</code>.
      </p>
      <ul className="home__list">
        <li>App Router + TypeScript + SCSS</li>
        <li>Дальше: mock постов, detail, admin CRUD, auth gate</li>
      </ul>
    </main>
  )
}
