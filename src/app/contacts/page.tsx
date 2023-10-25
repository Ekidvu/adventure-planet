import ContactsPageContent from "./page-content";
import type { Metadata } from 'next';
import { metaConst, metaInfo } from "../show-list-database";

export const metadata: Metadata = {
    title: metaInfo("/contacts")?.titleName,
    description: "Шоу Планета Приключений - " + metaInfo("/contacts")?.description + metaConst.description,
    openGraph: {
        title: metaInfo("/contacts")?.titleName + metaConst.openGraph.title,
        description: "Шоу Планета Приключений - " + metaInfo("/contacts")?.description + metaConst.openGraph.description,
        url: metaConst.openGraph.url + "/contacts",
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
        title: metaInfo("/contacts")?.titleName + metaConst.twitter.titleAdd,
        description: "Шоу Планета Приключений - " + metaInfo("/contacts")?.description + metaConst.twitter.description,
        images: metaConst.twitter.images,
    },
}


function ContactsPage() {

    return (
        <ContactsPageContent />
    );
}

export default ContactsPage;