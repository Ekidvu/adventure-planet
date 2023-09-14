"use client"
import cn from "classnames";
import s from "./styles.module.css"
import { showListData } from "../show-list-database";
import { switchIcons } from "../components/mp-text-block/text-block";
import Accordion from "../components/accordion";
import ApplicationForm from "../components/application-form";


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
                                <ul className={cn(s.cell, `shows_grid_cell_${index}`)} key={index}>
                                    <li className={s.cell_div}>
                                        <div className={s.icon_div}>{switchIcons(el)}</div>
                                        <span>{el.title}</span>
                                    </li>
                                </ul>))
                            }

                        </div>
                    </div>
                </section>

                {showListData.map((blockInfo, index) => (
                        <Accordion 
                            key={index} 
                            showTag={blockInfo.block}
                            index={index}
                            title={blockInfo.title}
                            textList={blockInfo.text}  
                        />
                ))}

                <footer className={s.footer} style={{ height: "1125px" }}>
                    <ApplicationForm />
                </footer>
            </div>
        </main>
    );
}

export default ShowsPage;

