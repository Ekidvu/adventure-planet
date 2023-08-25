import Image from 'next/image'
import Logo from '../img/logo_1'
import s from './page.module.css'
import cn from 'classnames'
import ButtonRound from './components/button/btn-round'


export default function Home() {
  return (
    <main className={s.main}>
      <section className={cn(s.hello, s.section)}>
        <div className={cn(s.hello_container, s.sect_cont)}>
          <div className={s.hello_disc}>
            <h1 className={s.heading_text}>Наша планета
              предлагает увлекательное приключение</h1>
            <div className={s.box_text}>Шоу-программы и анимация.
              Будет весело!</div>
            <ButtonRound btn_text="ВЫБРАТЬ ПРИКЛЮЧЕНИЕ" />
          </div>
          <div className={s.hello_logo}>
            <Logo />
          </div>
        </div>

      </section>

    </main>
  )
}

{/* <ButtonRound btn_text: string="ВЫБРАТЬ ПРИКЛЮЧЕНИЕ" /> */ }
