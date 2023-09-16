"use client"
import { useRef } from 'react';
import s from './styles.module.css';
import { galleryData } from '@/app/reviews-data';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import cn from 'classnames';
register();



function SwiperGallery(prop: { perView: number }) {
    const swiperElRef = useRef(null);

    return (
        <Swiper
            ref={swiperElRef}
            className={cn(s.swiper_container, 'gallery_swiper_container')}
            grabCursor={true}
            slidesPerView={prop.perView}
            spaceBetween={15}
        >
            {galleryData.map((dataItem, index) => (
                <SwiperSlide key={index} className={s.gallery_slide}>
                    {!dataItem.link2
                        ? <Image src={dataItem?.link1} key={index} alt="" width="270" height="370" unoptimized className={cn(s.gal_photo, s.gal_photo_vertical, "gal_photo", "gal_photo_vertical")} />
                        : <>
                            <Image src={dataItem?.link1} key={index} alt="" width="270" height="177" unoptimized className={cn(s.gal_photo, s.gal_photo_wide, "gal_photo", "gal_photo_wide")} />
                            <Image src={dataItem?.link2} key={index + 500} alt="" width="270" height="177" unoptimized className={cn(s.gal_photo, s.gal_photo_wide, "gal_photo", "gal_photo_wide")} />
                        </>
                    }
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperGallery;



// --swiper-navigation-size
// --swiper-navigation-color

// swiper-wrapper

// class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"

// swiper-button-prev, swiper-button-next

