import ReviewsPageContent from "./page-content";
import type { Metadata } from 'next';
import { metaConst, metaInfo } from "../show-list-database";

export const metadata: Metadata = {
    title: metaInfo("/reviews")?.titleName,
    description: "Шоу Планета Приключений - " + metaInfo("/reviews")?.description + metaConst.description,
    keywords: metaConst.keywords,
    openGraph: {
        title: metaInfo("/reviews")?.titleName + metaConst.openGraph.title,
        description: "Шоу Планета Приключений - " + metaInfo("/reviews")?.description + metaConst.openGraph.description,
        url: metaConst.openGraph.url + "/reviews",
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
        title: metaInfo("/reviews")?.titleName + metaConst.twitter.titleAdd,
        description: "Шоу Планета Приключений - " + metaInfo("/reviews")?.description + metaConst.twitter.description,
        images: metaConst.twitter.images,
    },
}


function ReviewsPage() {

    return (
        <ReviewsPageContent />
    );
}

export default ReviewsPage;