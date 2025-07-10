import type { Metadata } from "next";
import Head from "next/head";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswaldSans = Oswald({
  variable: "--font-oswald-sans",
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
        className={`${oswaldSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
