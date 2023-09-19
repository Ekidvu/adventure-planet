'use client';
import React from "react";
import Image from 'next/image';
import s from './page.module.css';
import cn from 'classnames';
import Button from './components/button/button';
import LogoIcon from '../img/logo_1.svg';
import TeslaPlusIcon from '../img/tesla_plus_icon.svg'
import TeslaMinusIcon from '../img/tesla_minus_icon.svg'
import MainPageTextBlock from "./components/mp-text-block/text-block";
import ReviewsMain from "./components/reviews-main-page";
import GalleryMainPage from "./components/gallery-main-page";
import headerBgMainPage from "../img/Real Main Frame header_pic_1.png";
import footerBgMainPage from "../img/\(main\ page\)\ pic\ 8\ Footer\ bg_1.png"
import { showListData } from "./show-list-database";
import Footer from "./components/footer-stamp";

export default function Home() {
  // const logo = require("../img/logo_1.svg") as string;

  return (
    <>
      <main className={s.main}>
        <section className={cn(s.hello_section)}>
          <div className={cn(s.hello_container)}>
            <div className={s.header_image_container}>
              <Image src={headerBgMainPage} alt="" className={s.header_image} />
            </div>
            <div className={s.hello_disc}>
              <h1 className={s.heading_text}>Наша планета
                предлагает увлекательное приключение</h1>
              <div className={s.box_text}>Шоу-программы и анимация.
                Будет весело!</div>
              <Button round={true} text="ВЫБРАТЬ ПРИКЛЮЧЕНИЕ" link="/shows" />
            </div>
            <div className={s.hello_logo}>
              <LogoIcon />
            </div>
          </div>
        </section>

        {showListData.map((e, index) => (
          <section className={cn(s.section, s.sect_cont)} key={index}>
            <MainPageTextBlock
              alignLeft={e.alignLeft}
              title={e.title}
              text={e.text}
              icon={e.icon}
            />
          </section>))
        }

        <section className={cn(s.section, s.sect_cont, s.sect_reviews)}>
          <ReviewsMain />
        </section>
        <section className={cn(s.section, s.sect_cont, s.sect_gallery)}>
          <GalleryMainPage />
        </section>
        <section className={cn("footer_footer", s.sect_footer)}>
          <Footer />
          <Image src={footerBgMainPage} alt="" className={s.footer_image} />
        </section>
      </main>

    </>

  )
}



