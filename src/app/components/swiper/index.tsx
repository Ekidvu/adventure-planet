"use client"
import { useEffect, useRef } from 'react';
import Button from '../button/button';
import s from './styles.module.css';
import { reviewsData } from '@/app/reviews-data';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import SwiperCard from '../swiper-card';
import cn from 'classnames';
register();

function SwiperReviews(prop: { perView: number }) {
    const swiperElRef = useRef(null);
    // console.log(swiperElRef);
    // console.log(prop.perView);

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

    return (
        <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            ref={swiperElRef}
            navigation={true}
            pagination={true}
            className={cn(s.swiper_container, 'reviews_swiper_container')}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={prop.perView}
            // spaceBetween={30}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
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
