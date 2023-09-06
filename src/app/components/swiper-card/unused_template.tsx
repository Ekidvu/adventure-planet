// "use client"
// import { useEffect, useRef } from 'react';
// import Button from '../button/button';
// import s from './styles.module.css';
// import { reviewsData } from '@/app/reviews-data';
// import { register } from 'swiper/element/bundle';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import SwiperCard from '.';
// register();

// function SwiperReviews(prop: {perView: number}) {
//     const swiperElRef = useRef(null);
//     // console.log(reviewsData);

//     useEffect(() => {
//         // listen for Swiper events using addEventListener
//         swiperElRef.current.addEventListener('progress', (e: React.UIEvent<HTMLElement>) => {
//           const [swiper, progress] = e.detail;
//           console.log(progress);
//         });
    
//         swiperElRef.current.addEventListener('slidechange', (e: React.UIEvent<HTMLElement>) => {
//           console.log('slide changed');
//         });
//       }, []);


//     return (
//         <swiper-container
//         ref={swiperElRef}
//         slides-per-view={prop.perView}
//         navigation="true"
//         pagination="true"
//         className={s.swiper_container}
//         >
//         {reviewsData.length && reviewsData.map((dataItem, index) => (
//             <swiper-slide><SwiperCard data={dataItem} key={index}/></swiper-slide>
//         ))}
    
//         </swiper-container>
//     );
// }

// export default SwiperReviews;