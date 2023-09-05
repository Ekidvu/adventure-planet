"use client"
import Link from "next/link";
import s from "./styles.module.css"
import cn from "classnames";
import React, { useState, useEffect } from 'react';
// import { useRef } from "react";

export default function Navbar() {
    const [scrollStatus, setScrollStatus] = useState(false)


    function updateHeader(): void {
        // console.log(window.innerWidth);
        if (window.scrollY > 0) setScrollStatus(true);             
        else setScrollStatus(false);
    }
    
    // 1375

    useEffect(() => {
        window.addEventListener('scroll', updateHeader, { passive: true });
        return () => {
            window.removeEventListener('scroll', updateHeader);
        };   
    }, [])


    return (
        <header className={s.section}>
            <div className={cn(s.container, {
                [s.header_scrolled]: scrollStatus,
            })}>
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
        </header>

    )

}


// event: React.MouseEvent<HTMLButtonElement>
// const handleScroll = (event: React.UIEvent<HTMLElement>)