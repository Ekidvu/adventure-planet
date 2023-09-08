import cn from "classnames";
import s from "./styles.module.css"



function Abus6ExtraServices() {
    return (
        <div className={s.abus_6_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</span>
                </div>
            </section>
        </div>
    );
}

export default Abus6ExtraServices;