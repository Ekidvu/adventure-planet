'use client'

import './globals.css';
import './variables.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { metadataInfo } from './show-list-database';
import Navbar from './components/navbar/navbar';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })
const pathname = usePathname();
let descriptionSugar: string = "Тесла шоу, мыльное шоу бумажное шоу, крио шоу, научное шоу, шоу мыльных пузырей, анимация.";

export const metadata: Metadata = {
  title: `${metaInfo(pathname)?.titleName} | Планета Приключений`,
  description: `Шоу Планета Приключений - ${metaInfo(pathname)?.description}. ${descriptionSugar}`,
  openGraph: {
    title: `${metaInfo(pathname)?.titleName} | Планета Приключений`,
    description: `Шоу Планета Приключений - ${metaInfo(pathname)?.description}. ${descriptionSugar}`,
    url: '',
    siteName: 'Планета Приключений',
    images: [
      {
        url: '/public/logo_meta.jpg',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    title: `${metaInfo(pathname)?.titleName} | Планета Приключений`,
    description: `Шоу Планета Приключений - ${metaInfo(pathname)?.description}. ${descriptionSugar}`,
    images: ['/public/logo_meta.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru" >
      <body className={inter.className} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}


function metaInfo(path: string) {
  return metadataInfo.find(el => el.page === path);
}