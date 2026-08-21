import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PublicLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
