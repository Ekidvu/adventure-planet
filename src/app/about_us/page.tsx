import AboutUsPageContent from "./page-content";
import type { Metadata } from 'next';
import { metaConst, metaInfo } from "../show-list-database";

export const metadata: Metadata = {
    title: metaInfo("/about_us")?.titleName,
    description: "Шоу Планета Приключений - " + metaInfo("/about_us")?.description + metaConst.description,
    keywords: metaConst.keywords,
    openGraph: {
        title: metaInfo("/about_us")?.titleName + metaConst.openGraph.title,
        description: "Шоу Планета Приключений - " + metaInfo("/about_us")?.description + metaConst.openGraph.description,
        url: metaConst.openGraph.url + "/about_us",
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
        title: metaInfo("/about_us")?.titleName + metaConst.twitter.titleAdd,
        description: "Шоу Планета Приключений - " + metaInfo("/about_us")?.description + metaConst.twitter.description,
        images: metaConst.twitter.images,
    },
}


function AboutUsPage() {

    return (
        <AboutUsPageContent />
    );
}

export default AboutUsPage;


{/* <section style={{height: "1125px"}}><Abus7AppForm/></section> */ }
