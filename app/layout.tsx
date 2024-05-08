import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import './colors.scss';
import './index.scss';
import './i18n';
import Navbar from "./navbar/navbar";
import Maintening from "./maintening";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon portfolio",
  description: "in progress..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={montserrat.className}>
{/*         <Navbar />
        <div id="page-content">
          {children}
        </div> */}
        <Maintening />
      </body>
    </html>
  );
}
