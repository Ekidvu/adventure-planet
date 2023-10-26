import './globals.css';
import './variables.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/navbar';
import Script from 'next/script'
import { metaConst, metaInfo } from './show-list-database';

const inter = Inter({ subsets: ['latin'] })
let descriptionSugar: string = "Тесла шоу, мыльное шоу бумажное шоу, крио шоу, научное шоу, шоу мыльных пузырей, анимация.";

export const metadata: Metadata = {
  title: {
    default: 'Планета Приключений',
    template: '%s | Планета Приключений',
  },
  description: descriptionSugar,
  keywords: metaConst.keywords,
  openGraph: {
      title: "Шоу Планета Приключений",
      description: "Шоу Планета Приключений - " + metaInfo("/")?.description + metaConst.openGraph.description,
      url: metaConst.openGraph.url,
      siteName: metaConst.openGraph.siteName,
      images: [
          {
              url: metaConst.openGraph.images_url,
          },
      ],
      locale: metaConst.openGraph.locale,
      type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    site: metaConst.twitter.site,
    title: metaInfo("/")?.titleName + metaConst.twitter.titleAdd,
    description: "Шоу Планета Приключений - " + metaInfo("/")?.description + metaConst.twitter.description,
    images: metaConst.twitter.images,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const pathname = usePathname();

  return (
    <html lang="ru" >
      <body className={inter.className} >
        <Navbar />
        {children}
      </body>
      {/* <Script
        src="https://example.com/script.js"
        strategy="beforeInteractive">

      </Script> */}
    </html>
  )
}



