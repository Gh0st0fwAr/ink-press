import { Header } from "@/components/Header";


export default function AdminLayout({ children }: LayoutProps<'/'>) {
    return (
        <div className="admin">
          <Header />
          <h1>Admin Page</h1>
          {children}
        </div>
    )
}