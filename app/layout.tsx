import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Lagos Ward Sacrament Meeting Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${manrope.variable} min-h-screen`}
      >
        <Header />

        <main className="mx-auto min-h-[70vh] max-w-6xl px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}