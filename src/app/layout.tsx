import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Solaris Mundus",
  description: "Solar sales and marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body className={`${interSans.variable} antialiased w-full h-full`}>
        <main className="w-full max-w-[1480px] flex flex-col md:grid md:grid-cols-2 md:h-screen md:gap-8 px-4 bg-red-100">
          {/* Header */}
          <section className="top order-1 md:order-none md:row-start-1 md:row-end-2 md:col-start-1">
            <Header />
          </section>

          {/* Content */}
          <section className="aside order-2 md:order-none md:row-span-2 md:col-start-2 md:h-screen md:overflow-y-auto">
            <section className="content min-h-screen">
              {children}
            </section>
          </section>

          {/* Footer */}
          <section className="bottom order-3 md:order-none md:row-start-2 md:row-end-3 md:col-start-1">
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
