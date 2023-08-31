import Link from "next/link";
import s from "./styles.module.css"
import Button from "../button/button";

export default function MainPageTextBlock(prop: {alignLeft: boolean, title: string, text: string}) {

    return (
        <div className={s.section}>
            <div className={s.container}>
                <h1 className={s.tb_title}>{prop.title}</h1>
                <div className={s.tb_text}>{prop.text}</div>
                <div className={s.tb_button}>
                    <Button round={false} text="ПОДРОБНЕЕ" />
                </div>
            </div>
        </div>

    )
}