import { Footer, Header } from "../common";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </html>
  );
}
