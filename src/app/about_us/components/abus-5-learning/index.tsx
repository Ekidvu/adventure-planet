import cn from "classnames";
import s from "./styles.module.css"



function Abus5Learning() {
    return (
        <div className={s.abus_5_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>ПОЗНАВАТЬ МИР ЛЕГКО</span>
                </div>
            </section>
        </div>
    );
}

export default Abus5Learning;