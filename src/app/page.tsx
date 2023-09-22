'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import s from './page.module.css';
import cn from 'classnames';
import Button from './components/button/button';
import LogoIcon from '../img/logo_1.svg';
import LogoMobileIcon from '../img/planet_logo_2.svg';
import MainPageTextBlock from "./components/mp-text-block/text-block";
import ReviewsMain from "./components/reviews-main-page";
import GalleryMainPage from "./components/gallery-main-page";
import headerBgMainPage from "../img/Real Main Frame header_pic_1.png";
import footerBgMainPage from "../img/\(main\ page\)\ pic\ 8\ Footer\ bg_1.png";
import reviewsMobileBg from "../img/Mobile_version/Mobile_bg_main_reviews_pic.png";
import mobileFooterBg from "../img/Mobile_version/Mobile_bg_footer_all_pages.png";
import Gagaga from "../img/Mobile_version/Mobile_reviews_svg copy.svg"
import { showListData } from "./show-list-database";
import Footer from "./components/footer-stamp";

export default function Home() {
  // const logo = require("../img/logo_1.svg") as string;
  const [windowMobile, setWindowMobile] = useState(false);

  function getWindowWidth(): void {
    if (window.innerWidth <= 1200) setWindowMobile(true)
    else setWindowMobile(false);
  }
  useEffect(() => {
    getWindowWidth();
    window.addEventListener('resize', getWindowWidth, { passive: true });
    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, [windowMobile])


  return (
    <main className={s.main}>
      <section className={cn(s.hello_section)}>
        <div className={cn(s.hello_container)}>
          <div className={s.header_image_container}>
            <Image src={headerBgMainPage} alt="" className={s.header_image} />
          </div>
          <div className={s.hello_disc}>
            <h1 className={s.heading_text}>Наша планета
              предлагает увлекательное приключение</h1>
            <div className={s.box_text}>Шоу-программы и анимация.<br />
              Будет весело!</div>
            <Button round={true} text="ВЫБРАТЬ ПРИКЛЮЧЕНИЕ" link="/shows" />
          </div>
          <div className={s.hello_logo}>
            {window.innerWidth > 1200
              ? <LogoIcon />
              : <LogoMobileIcon />
            }
          </div>
        </div>
      </section>

      {showListData.map((e, index) => {
        if (windowMobile) return <section className={cn(s.section, s.sect_cont)} key={index}>
          <MainPageTextBlock
            windowMobile={windowMobile}
            title={e.title}
            text={e.text}
            icon={e.icon}
          />
        </section>
        else return <section className={cn(s.section, s.sect_cont)} key={index}>
          <MainPageTextBlock
            alignLeft={e.alignLeft}
            title={e.title}
            text={e.text}
            icon={e.icon}
          />
        </section>
      })
      }

      <section className={cn(s.section, s.sect_cont, s.sect_reviews)}>
        {windowMobile && <div className={s.reviews_mobile_bg_div}><Image src={reviewsMobileBg} alt="" className={s.reviews_mobile_bg} /></div>}
        <ReviewsMain />
      </section>

      {/* <section className={cn(s.section, s.sect_cont, s.sect_reviews)}>
      <div className={s.reviews_mobile_bg_div_experiment}>
        <Image src={reviewsMobileBg} alt="" className={s.reviews_mobile_bg_experiment} 
        // style={{ webkitMaskImage: "url('../img/Mobile_version/Mobile_bg_main_reviews_frame_svg.svg')", maskImage: "url('../img/Mobile_version/Mobile_bg_main_reviews_frame_svg.svg")'}} 
        />
      </div>
      <Gagaga/>
      </section> */}

      <section className={cn(s.section, s.sect_cont, s.sect_gallery)}>
        <GalleryMainPage />
      </section>
      {window.innerWidth > 1200
        ? <section className={cn("footer_footer", s.sect_footer)}>
          <Footer />
          <Image src={footerBgMainPage} alt="" className={s.footer_image} />
        </section>
        : <section className={cn("footer_footer", s.sect_footer)}>
          <Image src={mobileFooterBg} alt="" className={s.mobile_footer_bg} />
        </section>
      }
      
    </main>
  )
}

// style={{height: "700px"}} 

