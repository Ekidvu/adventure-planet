"use client"
import cn from "classnames";
import s from "./styles.module.css"
import { showListData } from "../show-list-database";
import { switchIcons } from "../components/mp-text-block/text-block";

interface textBlockProps {
    alignLeft: boolean,
    title: string,
    text: (string | React.ReactNode)[],
    icon: string,
}

function ShowsPage() {



    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <div className={s.header_margin}></div>
                <section className={cn(s.shows_list, s.showpage_section)}>
                    <div className={s.showlist_box}>
                        <h1 className={cn("abus_title", s.title_div)}>ШОУ-ПРОГРАММЫ</h1>
                        <div className={cn("abus_text", s.list_grid)}>
                            {showListData.map((el, index) => ( 
                            <div className={cn(s.cell, `shows_grid_cell_${index}`)} key={index}>
                                    <li className={s.cell_div}>
                                        <div className={s.icon_div}>{switchIcons(el)}</div>
                                        <span>{el.title}</span>
                                    </li>
                            </div>))
                            }
                        </div>
                    </div>
                </section>
                {showListData.map((el, index) => (
                    <section key={index} className={cn(s.showpage_section)}>
                    <h1 className={cn("abus_title", s.titles_of_info)}>{el.title}</h1>
                    <div className={s.show_content_box}>
                        <div className={s.video_info_box}></div>
                        <p className={cn("abus_text", s.text_info_box)}>
                            {el.text.map((text_piece, index) => (
                                <li key={index}>{text_piece}</li>
                            ))}
                            <button className={s.show_accordion_button}>ПОДРОБНЕЕ</button>
                        </p>
                    </div>
                </section>
                ))}
                

                {/* <section className={cn(s.showpage_section)}></section>
                <section className={cn(s.showpage_section)}></section>
                <section className={cn(s.showpage_section)}></section>
                <section className={cn(s.showpage_section)}></section>
                <section className={cn(s.showpage_section)}></section> */}

                <section style={{ height: "1125px" }}></section>
            </div>
        </main>
    );
}

export default ShowsPage;