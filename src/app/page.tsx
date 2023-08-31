'use client';
import React from "react";
import Image from 'next/image';
// import Logo from '../img/logo_1';
// import logogo from '../img/logo_1.svg';
import s from './page.module.css';
import cn from 'classnames';
import Button from './components/button/button';
import LogoIcon from '../img/logo_1.svg';
import bg_image from '../img/bg_main_page_image.svg'
import MainPageTextBlock from "./components/mp-text-block/text-block";

export default function Home() {
  // const logo = require("../img/logo_1.svg") as string;

  return (
    <main className={s.main}>
      <section className={cn(s.hello, s.section)}>
        <div className={cn(s.hello_container, s.sect_cont)}>
          <div className={s.hello_disc}>
            <h1 className={s.heading_text}>Наша планета
              предлагает увлекательное приключение</h1>
            <div className={s.box_text}>Шоу-программы и анимация.
              Будет весело!</div>
            <Button round={true} text="ВЫБРАТЬ ПРИКЛЮЧЕНИЕ" />
          </div>
          <div className={s.hello_logo}>
            <LogoIcon />
            {/* <Logo /> */}
          </div>
        </div>
      </section>
      <section className={cn(s.section)}>
        <MainPageTextBlock 
          alignLeft={false} 
          title="ТЕСЛА ШОУ" 
          text={["У вас есть уникальная возможность зарядить себя и своих друзей позитивной энергией настоящих молний.", 
          "Примечание: В результате проведения Тесла шоу у людей открываются SUPER способности!", 
          "Меняем жизненный заряд с       на        уже 10 лет.", 
          "Программа для тех, кто хочет зарядиться чистой энергией и обрести супер способности."]}
          icon={'../img/(main page) pic 1st Tesla Show.svg'}
          exceptions={{"Примечание:": "s.tb_bold", "SUPER": "s.tb_yellow"}}
        />
      </section>
      <section className={cn(s.section)}></section>
      <section className={cn(s.section)}></section>
      <section className={cn(s.section)}></section>
      <section className={cn(s.section)}></section>
      <section className={cn(s.section)}></section>
    </main>
  )
}

{/* <ButtonRound btn_text: string="ВЫБРАТЬ ПРИКЛЮЧЕНИЕ" /> */ }




// text={["У вас есть уникальная возможность зарядить себя и своих", 
// "друзей позитивной энергией настоящих молний.", 
// "Примечание: В результате проведения Тесла шоу", 
// "у людей открываются SUPER способности!", 
// "Меняем жизненный заряд с       на        уже 10 лет.", 
// "Программа для тех, кто хочет зарядиться", 
// "чистой энергией и обрести супер способности."]}


