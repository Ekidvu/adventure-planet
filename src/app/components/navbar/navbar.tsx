"use client"
import Link from "next/link";
import s from "./styles.module.css"
import cn from "classnames";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
// import { useRef } from "react";

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

    return (
        <header className={s.section}>
            <div className={cn(s.container, {
                [s.header_scrolled]: scrollStatus,
                [s.header_scrolled_no_main]: pathname !== "/" && scrollStatus,
            })}>
                <div className={s.call}>
                    <a href="#" className={cn({
                    [s.call_div]: themeAllDarkAndCallBg,
                })}>ЗАКАЗАТЬ ЗВОНОК</a>
                </div>
                <div className={cn(s.links, {
                    [s.links_dark_all]: themeAllDarkAndCallBg && !scrollStatus,
                    [s.links_dark_aside_main]: pathname === "/about_us" || pathname === "/gallery" || pathname === "/contacts",
                })}>
                    <Link href="/" className="smtimes_white">Главная</Link>
                    <Link href="/about_us" className="smtimes_white">О нас</Link>
                    <Link href="/shows">Шоу-программы</Link>
                    <Link href="/gallery">Галерея</Link>
                    <Link href="/reviews">Отзывы</Link>
                    <Link href="/contacts">Контакты</Link>
                </div>
                {/* {themeAllDarkAndCallBg && !scrollStatus && <div className={s.call_bg} style={{position: "absolute"}}></div>} */}
                <div className={cn(s.call_bg, {
                    [s.call_bg_btn_active]: themeAllDarkAndCallBg && !scrollStatus,
                })} style={{position: "absolute"}}></div>
            </div>
        </header>

    )

}


// event: React.MouseEvent<HTMLButtonElement>
// const handleScroll = (event: React.UIEvent<HTMLElement>)