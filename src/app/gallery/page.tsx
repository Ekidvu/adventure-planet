"use client"
import cn from "classnames";
import ApplicationForm from "../components/application-form";
import SwiperReviews from "../components/swiper";
import s from "./styles.module.css"
import SwiperGallery from "../components/swiper-gallery";



function GalleryPage() {
    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <div className={s.header_margin} style={{ height: "200px" }}></div>
                <section className={s.gallery_section}>
                    <div className={cn(s.title_div, "abus_title")}>ГАЛЕРЕЯ</div>
                    <div className={s.gallery_div}>
                        <SwiperGallery perView={4} />
                    </div>
                </section>
                <section className={s.form_section}>
                    <ApplicationForm />
                </section>
                <section style={{ height: "1628px" }}></section>
            </div>
        </main>
    );
}

export default GalleryPage;