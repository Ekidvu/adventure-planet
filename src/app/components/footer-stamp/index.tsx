import cn from "classnames";
import s from "./styles.module.css";
import LogoFooterIcon from "../../../img/planet_logo_2.svg"
import Link from "next/link";


function Footer(): JSX.Element {

    const year = new Date().getFullYear();

    return (
        <div className={cn(s.footer_container, "footer_box_elem")}>
            <div className={cn(s.footer_box_of_blocks, "footer_box_of_blocks")}>
                <div className={cn(s.footer_block, s.links_box)}>
                    <ul className={s.text_box}>
                        <Link href="/" data-i={1}>Главная</Link>
                        <Link href="/about_us" data-i={2}>О нас</Link>
                        <Link href="/shows" data-i={3}>Шоу-программы</Link>
                        <Link href="/gallery" data-i={4}>Галерея</Link>
                        <Link href="/reviews" data-i={5}>Отзывы</Link>
                        <Link href="/contacts" data-i={6}>Контакты</Link>
                    </ul>
                </div>
                <div className={cn(s.footer_block, s.image_box)}>
                    <LogoFooterIcon />
                </div>
                <div className={cn(s.footer_block, s.contacts_box)}>
                    <ul className={s.footer_phone_info}>
                        <li>
                            <span>Телефон:&nbsp;</span>
                            <a href="tel:+79264581535">+7(926) 458-15-35</a>
                        </li>
                        <li>
                            <span>WhatsApp:&nbsp;</span>
                            <a href="https://wa.me/+79264581535" target="_blank">+7(926) 458-15-35</a>
                        </li>
                        <li>Telegram:&nbsp;<a href="https://t.me/alexandrboytsov" target="_blank">@alexandrboytsov</a>
                        </li>
                        <li>E-mail:&nbsp;<a href="mailto:planeta_priklu4eny@mail.ru">planeta_priklu4eny@mail.ru</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s.footer_confidentiality}>
                <p className={s.copyright_box}>
                    <span>Copyright © {year} «Планета Приключений».&nbsp;</span>
                    <span className={s.copyright_box_rights}>Все права защищены.</span>
                </p>
                <Link href="/policy" className={s.policy_page_button}>Политика конфиденциальности</Link>
            </div>

        </div>
    );
}

export default Footer;


