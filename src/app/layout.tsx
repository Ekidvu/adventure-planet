'use client'

import './globals.css';
import './variables.css';
import type { Metadata, ResolvingMetadata } from 'next';
import { Inter } from 'next/font/google';
import { metadataInfo } from './show-list-database';
import Navbar from './components/navbar/navbar';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })
let descriptionSugar: string = "Тесла шоу, мыльное шоу бумажное шоу, крио шоу, научное шоу, шоу мыльных пузырей, анимация.";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  // { params, searchParams }: Props,
  // parent: ResolvingMetadata
): Promise<Metadata> {
  const pathname = usePathname();
  const metaInfo = metadataInfo.find(el => el.page === pathname)
  
  
  return {
    title: `${metaInfo?.titleName} | Планета Приключений`,
    description: `Шоу Планета Приключений - ${metaInfo?.description}. ${descriptionSugar}`,
    openGraph: {
      title: `${metaInfo?.titleName} | Планета Приключений`,
      description: `Шоу Планета Приключений - ${metaInfo?.description}. ${descriptionSugar}`,
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
      title: `${metaInfo?.titleName} | Планета Приключений`,
      description: `Шоу Планета Приключений - ${metaInfo?.description}. ${descriptionSugar}`,
      images: ['/public/logo_meta.jpg'],
    }
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


// function metaInfo(path: string) {
//   return metadataInfo.find(el => el.page === path);
// }
