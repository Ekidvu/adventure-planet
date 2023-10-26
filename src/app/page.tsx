import React from "react";

import HomePageContent from "./page-content";
import type { Metadata } from 'next';
import { metaConst, metaInfo } from "./show-list-database";

export const metadata: Metadata = {
    title: metaInfo("/")?.titleName + " | Планета Приключений",
    description: "Шоу Планета Приключений - " + metaInfo("/")?.description + metaConst.description,
    keywords: metaConst.keywords,
    openGraph: {
        title: metaInfo("/")?.titleName + metaConst.openGraph.title,
        description: "Шоу Планета Приключений - " + metaInfo("/")?.description + metaConst.openGraph.description,
        url: metaConst.openGraph.url + "/",
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


export default function Home() {

  return (
    <HomePageContent />
  )
}




{/* <section className={cn("footer_footer", s.sect_footer)}>
          <Footer />
          <MobileFooterBg alt="" className={s.mobile_footer_bg} /> */}
          {/* <Image src={mobileFooterBg} alt="" className={s.mobile_footer_bg} /> */}
{/* </section> */}


// EMAILFROM: "elijahboronin@yandex.ru"
// EMAILTO: "elijahboronin@yandex.ru"
// APPPASS: "xwpecexuxgdbhffe"