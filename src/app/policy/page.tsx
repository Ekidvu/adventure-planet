import PolicyPageContent from "./page-content";
import type { Metadata } from 'next';
import { metaConst, metaInfo } from "../show-list-database";

export const metadata: Metadata = {
    title: metaInfo("/policy")?.titleName,
    description: "Шоу Планета Приключений - " + metaInfo("/policy")?.description + metaConst.description,
    keywords: metaConst.keywords,
    openGraph: {
        title: metaInfo("/policy")?.titleName + metaConst.openGraph.title,
        description: "Шоу Планета Приключений - " + metaInfo("/policy")?.description + metaConst.openGraph.description,
        url: metaConst.openGraph.url + "/policy",
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
        title: metaInfo("/policy")?.titleName + metaConst.twitter.titleAdd,
        description: "Шоу Планета Приключений - " + metaInfo("/policy")?.description + metaConst.twitter.description,
        images: metaConst.twitter.images,
    },
}


function PolicyPage() {

    return (
        <PolicyPageContent />
    );
}

export default PolicyPage;


