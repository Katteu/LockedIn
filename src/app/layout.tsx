"use client";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Providers from "@/providers/Providers";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>LockedIn | Memorize your thing!</title>
        <meta
          name="description"
          content="The better way to memorize your thing!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`bg-white dark:bg-secondary px-[36px] sm:px-[72px] lg:px-[144px] py-[20px] gap-[20px] flex flex-col ${montserrat.variable}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
