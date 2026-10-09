import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


export default function PublicLayout({ children }: LayoutProps<'/'>) {
    return (
        <div className="public">
          <Header />
            {children}
          <Footer />
        </div>
    )
}