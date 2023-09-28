"use client"
import { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
import s from './styles.module.css';
import { reviewsData } from '@/app/reviews-data';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import SwiperCard from '../swiper-card';
import cn from 'classnames';
register();

function SwiperReviews(prop: { perView: number, slideShadows: boolean, depth: number, rotate: number }) {
    const swiperElRef = useRef<SwiperRef>(null);
    // const [instance, setInstance] = useState<SwiperClass | null>(null);
    
     useEffect (() => {
        swiperElRef.current?.swiper.slideNext();
    }, [])

    return (
        <Swiper
            modules={[EffectCoverflow, Pagination]}
            ref={swiperElRef}
            navigation={true}
            pagination={true}
            className={cn(s.swiper_container, 'reviews_swiper_container')}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={prop.perView}
            coverflowEffect={{
                rotate: prop.rotate,
                stretch: 1,
                depth: prop.depth,
                modifier: 1,
                slideShadows: prop.slideShadows,
            }}
            spaceBetween={window.innerWidth>1200 
                            ? 2 
                            : window.innerWidth>600 ? 190 : 30}
            // autoHeight={true}
            // pagination-dynamic-bullets={true}
            // loop={true}
        >
            {reviewsData.length && reviewsData.map((dataItem, index) => (
                <SwiperSlide key={index}>
                    <SwiperCard data={dataItem} key={index} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperReviews;



// --swiper-navigation-size
// --swiper-navigation-color

// swiper-wrapper

// class="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"

// swiper-button-prev, swiper-button-next

    // useEffect(() => {
    //     // listen for Swiper events using addEventListener
    //     swiperElRef?.current.addEventListener('progress', (e: React.UIEvent<HTMLElement>) => {
    //         const [swiper, progress] = e.detail;
    //         console.log(progress);
    //     });

    //     swiperElRef?.current.addEventListener('slidechange', (e: React.UIEvent<HTMLElement>) => {
    //         console.log('slide changed');
    //     });
    // }, []);