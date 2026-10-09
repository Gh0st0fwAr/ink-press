import { mockData } from '@/data/mock';
import { Feed } from '@/components/Feed';
// import { Card } from '@/components/Card';
import type { Post } from '@/data/types';

export default function Home() {
  const posts: Post[] = mockData;
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

      <Feed posts={posts}></Feed>
    </main>
  )
}
