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
      <body
        className={`${interSans.variable} antialiased w-full h-full`}
      >
        {/* <main className='mx-auto grid grid-cols-2 grid-row-1 w-full max-w-[1480px] px-4 bg-red-300'>
          <section className="top">
            <Header/>
          </section>
          <section className="bottom">
            <Footer/>
          </section>
          <section className="aside">
            <section className='content min-h-screen'>
              {children}
            </section>
          </section>
        </main> */}
        <main className="flex flex-col md:grid md:grid-cols-2 md:h-screen px-4 bg-red-300">
          <section className="top order-1 md:order-none">
            <Header />
          </section>

          <section className="aside order-2 md:order-none md:overflow-y-auto md:h-screen">
            <section className="content min-h-screen">
              {children}
            </section>
          </section>

          <section className="bottom order-3 md:order-none">
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
