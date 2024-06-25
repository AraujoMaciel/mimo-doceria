import Header from "@/componentes/header/header";
import Footer from "@/componentes/footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="pt-br">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }