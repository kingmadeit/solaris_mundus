import type { Metadata } from "next";
import Head from "next/head";
import { Inter, Antonio } from "next/font/google";
import { Footer, Header, PageTitle, SectionBlock } from "@/components";

import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const antonio = Antonio({
  variable: "--font-antonio",
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
      <body className={`${interSans.variable} ${antonio.variable} justify-center flex antialiased w-full h-full`}>
        <PageTitle />
        <main className="w-full max-w-[1480px] flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto,1fr,auto] md:h-screen md:gap-8 px-4 md:px-6">
          {/* Header */}
          <section className="top pt-25 md:pt-50 order-1 md:sticky md:order-none md:row-start-1 md:col-start-1">
            <Header />
          </section>

          {/* SectionBlock */}
          <section className="center order-2 md:sticky md:order-none md:row-start-2 md:col-start-1">
            <SectionBlock />
          </section>

          {/* Footer */}
          <section className="bottom order-4 md:sticky md:order-none md:row-start-3 md:col-start-1">
            <Footer />
          </section>

          {/* Content */}
          <section className="aside md:z-1 pt-25 md:pt-50 order-3 md:order-none md:row-span-3 md:col-start-2 md:h-screen md:overflow-y-auto">
            <section className="aside__content min-h-screen">
              {children}
            </section>
          </section>
        </main>
      </body>
    </html>
  );
}
