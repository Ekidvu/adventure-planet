import GalleryPageContent from "./page-content";
import type { Metadata } from 'next';
import { metaConst, metaInfo } from "../show-list-database";

export const metadata: Metadata = {
    title: metaInfo("/gallery")?.titleName,
    description: "Шоу Планета Приключений - " + metaInfo("/gallery")?.description + metaConst.description,
    openGraph: {
        title: metaInfo("/gallery")?.titleName + metaConst.openGraph.title,
        description: "Шоу Планета Приключений - " + metaInfo("/gallery")?.description + metaConst.openGraph.description,
        url: metaConst.openGraph.url + "/gallery",
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
        title: metaInfo("/gallery")?.titleName + metaConst.twitter.titleAdd,
        description: "Шоу Планета Приключений - " + metaInfo("/gallery")?.description + metaConst.twitter.description,
        images: metaConst.twitter.images,
    },
}


function GalleryPage() {

    return (
        <GalleryPageContent />
    );
}

export default GalleryPage;

