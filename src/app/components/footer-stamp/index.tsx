import cn from "classnames";
import s from "./styles.module.css";
import LogoFooterIcon from "../../../img/planet_logo_2.svg"
import Link from "next/link";


function Footer(): JSX.Element {
    return (
        <div className={cn(s.footer_container, "footer_box_elem")}>
            <div className={s.footer_box_of_blocks}>
                <div className={cn(s.footer_block, s.links_box)}>
                    <ul className={s.text_box}>
                        <Link href="/">Главная</Link>
                        <Link href="/about_us">О нас</Link>
                        <Link href="/shows">Шоу-программы</Link>
                        <Link href="/gallery">Галерея</Link>
                        <Link href="/reviews">Отзывы</Link>
                        <Link href="/contacts">Контакты</Link>
                    </ul>
                </div>
                <div className={cn(s.footer_block, s.image_box)}>
                    <LogoFooterIcon />
                </div>
                <div className={cn(s.footer_block, s.contacts_box)}>
                    <ul className={s.footer_phone_info}>
                        <li>
                            <span>Телефон:</span>
                            <span>&nbsp;+7(926) 458-15-35</span>
                        </li>
                        <li>
                            <span>WhatsApp:</span>
                            <span>&nbsp;+7(926) 458-15-35</span>
                        </li>
                        <li>Telegram: @alexandrboytsov</li>
                        <li>E-mail: planeta_priklu4eny@mail.ru</li>
                    </ul>
                </div>
            </div>
            <div className={s.footer_confidentiality}>
                <p className={s.copyright_box}>Copyright © 2023 ООО «Планета Приключений». Все права защищены.</p>
                <Link href="/policy" className={s.policy_page_button}>Политика конфиденциальности</Link>
            </div>

        </div>
    );
}

export default Footer;


