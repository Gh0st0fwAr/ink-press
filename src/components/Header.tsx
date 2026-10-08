import Link from 'next/link'

export function Header() {
  return (
    <header className="header">
      <Link className="brand" href="/">
        Ink <span>Press</span>
      </Link>
      <nav className="nav" aria-label="Основная">
        <Link href="/">Лента</Link>
        <Link href="/admin">Админка</Link>
      </nav>
    </header>
  )
}
