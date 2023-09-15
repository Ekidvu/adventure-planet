"use client"
import cn from "classnames";
import ApplicationForm from "../components/application-form";
import s from "./styles.module.css"
import SwiperGallery from "../components/swiper-gallery";
import { MouseEvent, useState } from "react";
import ModalGallery from "../components/modal-gallery";
import Button from "../components/button/button";
import Image from "next/image";
import { galleryData } from "../reviews-data";
// import svg from "../../img/(main page) pic 1st Tesla Show.svg?url";

function GalleryPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
    // const [photoRef, setPhotoRef] = useState<React.ReactNode>();
    // let photoRef: React.ReactNode;

    function openGallery(): void {
        setIsModalOpen(true);
    }
    function zoomPhoto(e): void {
        setIsPhotoModalOpen(true);
        console.log(e);
        // setPhotoRef(e.currentTarget)
        // console.log(event.currentTarget.src);
    }

    return (
        <main className={s.main} style={{ position: "relative" }}>
            <div className={s.sections_container}>
                <header className={s.header} style={{ position: "absolute", top: 0 }}></header>
                <section className={s.gallery_section}>
                    <div className={s.title_div}>
                        <h1 className={s.gallery_btn_cont}><button className={cn(s.gallery_button, "abus_title")} onClick={openGallery}>ГАЛЕРЕЯ</button></h1>
                    </div>
                    {/* <div className={s.gallery_div}>
                        <SwiperGallery perView={4} />
                    </div> */}
                </section>
                <section className={s.gallery_pic_section}>
                    {galleryData.map((dataItem, index) => (
                        <div className={s.pics_frame} key={index}>
                            {!dataItem.link2
                                ? <Image src={dataItem?.link1} key={index} alt="" width="270" height="370" unoptimized className={cn(s.gal_photo, s.gal_photo_vertical, "gal_photo", "gal_photo_vertical")} onClick={zoomPhoto} /> 
                                : <p className={s.gal_photo_wide_container}>
                                    <Image src={dataItem?.link1} key={index} alt="" width="270" height="177" unoptimized className={cn(s.gal_photo, s.gal_photo_wide, "gal_photo", "gal_photo_wide")} onClick={zoomPhoto}/>
                                    <Image src={dataItem?.link2} key={index + 500} alt="" width="270" height="177" unoptimized className={cn(s.gal_photo, s.gal_photo_wide, "gal_photo", "gal_photo_wide")} onClick={zoomPhoto}/>
                                </p>}
                        </div>
                    ))}
                </section>
                <footer className={s.footer} style={{}}>
                    <ApplicationForm />
                </footer>
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

            {isPhotoModalOpen && (
                <ModalGallery
                    isOpen={isPhotoModalOpen}
                    handleClose={() => setIsPhotoModalOpen(!isPhotoModalOpen)}
                >
                    <div className={s.photo_zoom_modal_div}>
                        {/* {photoRef} */}
                    </div>
                    <button
                        onClick={() => setIsPhotoModalOpen(!isPhotoModalOpen)}
                        className={cn("abus_text", s.btn_on_modal)}
                    >Закрыть</button>
                </ModalGallery>
            )}

        </main>
    );
}

export default GalleryPage;

