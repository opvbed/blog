import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "My Blog | Personal Blog",
  description: "Selamat datang di blog pribadi saya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.className}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow container mx-auto py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
