import './globals.css';
import './variables.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/navbar/navbar';
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
let descriptionSugar: string = "Тесла шоу, мыльное шоу бумажное шоу, крио шоу, научное шоу, шоу мыльных пузырей, анимация.";

export const metadata: Metadata = {
  title: {
    default: 'Планета Приключений',
    template: '%s | Планета Приключений',
  },
  description: descriptionSugar,
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



