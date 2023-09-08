import cn from "classnames";
import s from "./styles.module.css"



function Abus4HelpfulInfo() {
    return (
        <div className={s.abus_4_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>Наша планета вращается вокруг солнца, даря радость ребятам с <div>2012</div> года</span>
                </div>
            </section>
        </div>
    );
}

export default Abus4HelpfulInfo;