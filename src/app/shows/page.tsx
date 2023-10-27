import ShowsPageContent from "./page-content";
import type { Metadata } from 'next';
import { metaConst, metaInfo } from "../show-list-database";

export const metadata: Metadata = {
    title: metaInfo("/shows")?.titleName,
    description: "Шоу Планета Приключений - " + metaInfo("/shows")?.description + metaConst.description,
    keywords: metaConst.keywords,
    openGraph: {
        title: metaInfo("/shows")?.titleName + metaConst.openGraph.title,
        description: "Шоу Планета Приключений - " + metaInfo("/shows")?.description + metaConst.openGraph.description,
        url: metaConst.openGraph.url + "/shows",
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
        title: metaInfo("/shows")?.titleName + metaConst.twitter.titleAdd,
        description: "Шоу Планета Приключений - " + metaInfo("/shows")?.description + metaConst.twitter.description,
        images: metaConst.twitter.images,
    },
}


function ShowsPage() {

    return (
        <ShowsPageContent />
    );
}

export default ShowsPage;