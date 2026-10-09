import { Header } from '@/components/Header'

export default function AdminLayout({ children }: LayoutProps<'/'>) {
  return (
    <div className="admin">
      <Header />
      <div className="admin__intro">
        <p className="admin__eyebrow">Ink Press · Admin</p>
        <h1 className="admin__title">Панель постов</h1>
        <p className="admin__lead">
          Все записи из mock: черновики и опубликованные. Создание и правка — на следующих шагах.
        </p>
      </div>
      {children}
    </div>
  )
}
