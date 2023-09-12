"use client"
import cn from "classnames";
import ApplicationForm from "../components/application-form";
import s from "./styles.module.css"
import SwiperGallery from "../components/swiper-gallery";
import { useState } from "react";
import ModalGallery from "../components/modal-gallery";
import Button from "../components/button/button";


function GalleryPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)


    function openGallery(): void {
        console.log("yeaiiiii");
        setIsModalOpen(true);
    }

    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <div className={s.header_margin} style={{ height: "200px" }}></div>
                <section className={s.gallery_section}>
                    <div className={s.title_div}>
                        <div className={s.gallery_btn_cont}><button className={cn(s.gallery_button, "abus_title")} onClick={openGallery}>ГАЛЕРЕЯ</button></div>
                    </div>
                    <div className={s.gallery_div}>
                        <SwiperGallery perView={4} />
                    </div>
                </section>
                <section className={s.form_section}>
                    <ApplicationForm />
                </section>
                <section style={{ height: "739px" }}></section>
            </div>

            {isModalOpen && (
                <ModalGallery
                    isOpen={isModalOpen}
                    handleClose={() => setIsModalOpen(!isModalOpen)}
                >
                    <div className={s.gallery_modal_div}>
                        <SwiperGallery perView={1} />
                    </div>
                    <button 
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className={cn("abus_text", s.btn_on_modal)}
                    >Закрыть</button>
                </ModalGallery>

            )}
        </main>
    );
}

export default GalleryPage;