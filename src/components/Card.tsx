import type { Post } from '../data/types';
import Link from 'next/link';

type CardProps = {
  data: Post
}

/** Первый аргумент компонента — всегда объект props, не «голый» Post. */
export function Card({ data }: CardProps) {
  return (
    <Link href={`/posts/${data.slug}`} className="card">
      <h2 className="card__title">{data.title}</h2>
      <div className="card__timeline">
        <p className="card__created card__time">Created: {data.createdAt}</p>
        {data.updatedAt ? (
          <p className="card__updated card__time">Updated: {data.updatedAt}</p>
        ) : null}
      </div>
      <p className="card__excerpt">{data.excerpt}</p>
      <div className="card__tags">
        {data.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
