import cn from "classnames";
import s from "./styles.module.css";
import LogoFooterIcon from "../../../img/planet_logo_2.svg"
import Link from "next/link";


function Footer(): JSX.Element {
    return (
        <div className={s.footer_container}>
            <div className={s.footer_box_of_blocks}>
                <div className={cn(s.footer_block, s.links_box)}>
                    <ul className={s.text_box}>
                        <li>Главная</li>
                        <li>Галерея</li>
                        <li>О нас</li>
                        <li>Отзывы</li>
                        <li>Шоу-программы</li>
                        <li>Контакты</li>
                    </ul>
                    <p className={s.copyright_box}>Copyright © 2023 ООО «Планета Приключений». Все права защищены.</p>
                </div>
                <div className={cn(s.footer_block, s.image_box)}>
                    <LogoFooterIcon />
                </div>
                <div className={cn(s.footer_block, s.contacts_box)}>
                    <ul>
                        <li>
                            <span>Телефон:</span>
                            <span>+7(926) 458-15-35</span>
                        </li>
                        <li>
                            <span>WhatsApp:</span>
                            <span>&nbsp;+7(926) 458-15-35</span>
                        </li>
                        <li>Telegram: @alexandrboytsov</li>
                        <li>E-mail: planeta_priklu4eny@mail.ru</li>
                    </ul>
                    <Link href="/policy" className={s.policy_page_button}>Политика конфидециальности</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;


