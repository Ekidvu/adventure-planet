import Link from "next/link";
import s from "./styles.module.css"

export default function Navbar() {

    return (
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.call}>
                    <a href="#">ЗАКАЗАТЬ ЗВОНОК</a>
                </div>
                <div className={s.links}>
                    <Link href="/main">Главная</Link>
                    <Link href="/about_us">О нас</Link>
                    <Link href="/shows">Шоу-программы</Link>
                    <Link href="/gallery">Галерея</Link>
                    <Link href="/reviews">Отзывы</Link>
                    <Link href="/contacts">Контакты</Link>
                </div>
            </div>
        </div>

    )

}