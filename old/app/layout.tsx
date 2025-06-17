import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import './colors.scss';
import './index.scss';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import Navbar from "./[locale]/navbar/navbar";
import Maintening from "./[locale]/maintening";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon portfolio",
  description: "in progress..",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
}>) {
  // Ensure that the incoming `locale` is valid
 
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar lang={locale} />
          <div id="page-content">
            {children}
          </div>
          {/* <Maintening /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
