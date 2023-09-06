// 'use client';
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

export default function Home() {
  // const logo = require("../img/logo_1.svg") as string;

  return (
    <main className={s.main}>
      <section className={cn(s.hello_section)}>
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
          </div>
        </div>
      </section>
      <section className={cn(s.section, s.sect_cont)}>
        <MainPageTextBlock 
          alignLeft={false} 
          title="ТЕСЛА ШОУ" 
          text={["У вас есть уникальная возможность зарядить себя и своих друзей позитивной энергией настоящих молний.", 
          <div key={1}><span key={2} className="tb_bold">Примечание:</span>&nbsp;В результате проведения Тесла шоу у людей открываются <span key={3} className="tb_yellow tb_bold">SUPER</span>&nbsp;способности!</div>,
          <div key={4} className="div_icons_in_text_right">Меняем жизненный заряд с&nbsp;<span><TeslaMinusIcon/>&nbsp;</span>на<span>&nbsp;<TeslaPlusIcon/>&nbsp;</span>уже 10 лет.</div>, 
          "Программа для тех, кто хочет зарядиться чистой энергией и обрести супер способности."]}
          icon='teslaIcon'
        />
      </section>
      <section className={cn(s.section, s.sect_cont)}>
        <MainPageTextBlock 
          alignLeft={true} 
          title="БУМАЖНОЕ ШОУ" 
          text={["Более 10 кг бумаги разлетается по всему пространству приводя в восторг всех детей и взрослых.", 
          <div key={1}>Ведущий при помощи воздушной пушки&nbsp;<span key={2} className="tb_blue tb_bold">БАХ</span>ает в воздух бумагу низкой плотности, приправляя безудержное веселье залпами конфетти.</div>,
          <div key={3} className="div_icons_in_text_left">Затем организует бумажный бой, прыжки в&nbsp;<span className="tb_blue tb_bold">«БУМСУГРОБ»</span>&nbsp;и&nbsp;<span>танцы.</span></div>, 
          <div key={4} className="div_icons_in_text_left">В завершение на праздник влетает огромный&nbsp;<span className="tb_blue tb_bold">ШАР-СЮРПРИЗ</span>.</div>]}
          icon='paperIcon'
        />
      </section>
      <section className={cn(s.section, s.sect_cont)}>
        <MainPageTextBlock 
          alignLeft={false} 
          title="КРИО ШОУ" 
          text={[<div key={1}>В программе приготовление настоящего&nbsp;<span key={2} className="tb_bold tb_yellow">Азотного Мороженого</span>. В восторге останутся не только дети, но и взрослые. Вкусно, весело и безумно интересно!</div>,
          <div key={4} className="div_icons_in_text">Эксперименты с жидким азотом. Температура&nbsp;<span key={5} className="tb_bold tb_yellow">-195 С°</span></div>, 
          <div key={6} className="div_icons_in_text">В завершение программы азотный взрыв-туман вокруг и зажигательный&nbsp;<span key={7} className="tb_bold tb_yellow">COOLDANCE</span>.</div>]}
          icon='cryoIcon'
        />
      </section>
      <section className={cn(s.section, s.sect_cont)}>
        <MainPageTextBlock 
          alignLeft={true} 
          title="НАУЧНОЕ ШОУ" 
          text={["Вас ждут интерактивные опыты с сухим льдом.", 
          <div key={1}>Вместе с ребятами мы изготавливаем мини-водородную <span key={2} className="tb_blue tb_bold">БОМБУ-ХЛОПУШКУ</span>.</div>,
          <div key={4} className="div_icons_in_text">Разноцветные веселые&nbsp;<span className="tb_blue tb_bold">«ЧЕРВЯЧУШКИ»&nbsp;</span>появляются в результате опыта профессора Менделея.</div>, 
          "Делаем музыку погромче и высыпаем сухой лед в резервуар с теплой водой - густой туман."]}
          icon='scienceIcon'
        />
      </section>
      <section className={cn(s.section, s.sect_cont)}>
        <MainPageTextBlock 
          alignLeft={false} 
          title="ШОУ МЫЛЬНЫХ ПУЗЫРЕЙ" 
          text={["Шоу мыльных пузырей с погружением в мыльный пузырь.", "Путешествие на планету мыльных пузырей вместе с маленькими и взрослыми. Нас ждут мыльно-пузырчатый батут и настоящая карусель.", 
          "Делаем модные прически мыльных пузырей, вызываем мыльно-пузырчатого джина и загадываем желание!"]}
          icon='soapBubblesIcon'
        />
      </section>
      <section className={cn(s.section, s.sect_cont)}>
        <MainPageTextBlock 
          alignLeft={true} 
          title="АНИМАЦИЯ" 
          text={["Можно выбрать любого персонажа из фильма, мультфильма или видео-игры!", 
          <div key={1}>Играем в активные игры, отгадывает викторины-загадки, делаем&nbsp;<span key={2} className="tb_bold tb_yellow">ШАРИКИ-СОСИСКИ&nbsp;</span>(собачки, мечи, цветочки).</div>,
          <div key={3} className="div_icons_in_text">Всех присутствующих гостей обязательно порадуют легкий&nbsp;<span key={4} className="tb_bold tb_yellow">АКВАГРИМ&nbsp;</span>и классные оригинальные фокусы.</div>, 
          "Весь праздник сопровождается музыкой."]}
          icon='animationIcon'
        />
      </section>
      <section className={cn(s.section, s.sect_cont, s.sect_reviews)}>
        <ReviewsMain />
      </section>
      <section className={cn(s.section, s.sect_cont, s.sect_gallery)}>
        <GalleryMainPage />
      </section>
      
      {/* <section className={cn(s.section, s.sect_cont)}>
        <MainPageTextBlock 
          alignLeft={false} 
          title="ОТЗЫВЫ" 
          text={["У вас есть уникальная возможность зарядить себя и своих друзей позитивной энергией настоящих молний.", 
          <div key={1}><span key={2} className="tb_bold">Примечание:</span>&nbsp;В результате проведения Тесла шоу у людей открываются <span key={3} className="tb_yellow">SUPER</span>&nbsp;способности!</div>,
          <div key={4} className="div_icons_in_text">Меняем жизненный заряд с&nbsp;<span><TeslaMinusIcon/>&nbsp;</span>на<span>&nbsp;<TeslaPlusIcon/>&nbsp;</span>уже 10 лет.</div>, 
          "Программа для тех, кто хочет зарядиться чистой энергией и обрести супер способности."]}
          icon='reviewsIcon'
        />
      </section> */}

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


// exceptions={{"Примечание:": "s.tb_bold", "SUPER": "s.tb_yellow"}}