"use client"
import Link from "next/link";
import s from "./styles.module.css"
import cn from "classnames";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PhoneIcon from "../../contacts/icons/Phone_icon.svg";

export default function Navbar() {
    const [scrollStatus, setScrollStatus] = useState(false)
    // const location = useLocation()
    const pathname = usePathname();
    // console.log(pathname);

    function updateHeader(): void {
        if (window.scrollY > 0) setScrollStatus(true);
        else setScrollStatus(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateHeader, { passive: true });
        return () => {
            window.removeEventListener('scroll', updateHeader);
        };
    }, [])
    const themeAllDarkAndCallBg = pathname === "/shows" || pathname === "/reviews";
    const twoFirstLinksWhite = pathname === "/about_us" || pathname === "/gallery" || pathname === "/contacts" || pathname === "/policy";

    return (
        <header className={s.section} id="header">
            <div className={cn(s.container, {
                [s.header_scrolled]: scrollStatus,
                [s.header_scrolled_no_main]: pathname !== "/" && scrollStatus,
            })}>
                    <div className={s.call}>
                        <Link href="/contacts" className={cn(s.call_link, {
                            [s.call_div]: themeAllDarkAndCallBg,
                        })}>ЗАКАЗАТЬ ЗВОНОК</Link>
                    </div>

                <div className={cn(s.links, {
                    [s.links_dark_all]: themeAllDarkAndCallBg && !scrollStatus,
                    [s.links_dark_aside_main]: twoFirstLinksWhite
                })}>
                    <Link href="/" className="smtimes_white">Главная</Link>
                    <Link href="/about_us" className="smtimes_white">О нас</Link>
                    <Link href="/shows">Шоу-программы</Link>
                    <Link href="/gallery">Галерея</Link>
                    <Link href="/reviews">Отзывы</Link>
                    <Link href="/contacts">Контакты</Link>
                </div>
 
                <div className={cn(s.call_bg, {
                    [s.call_bg_btn_active]: themeAllDarkAndCallBg && !scrollStatus,
                })} style={{ position: "absolute" }}></div>
                <div className=""></div>
            <a href="#" className={s.to_top_btn}/>
            </div>
            
        </header>

    )

}

// event: React.MouseEvent<HTMLButtonElement>
// const handleScroll = (event: React.UIEvent<HTMLElement>)