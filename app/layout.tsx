import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rapcult",
  description: "Join Rapcult",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="">
          <Nav />
          <div className="container mx-auto ">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
