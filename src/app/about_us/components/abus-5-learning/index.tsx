import cn from "classnames";
import s from "./styles.module.css"
import { tabletText } from "./z-tablet-info";



function Abus5Learning() {
    return (
        <div className={s.abus_5_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>ПОЗНАВАТЬ МИР ЛЕГКО</span>
                </div>
                <div className={s.learn_bubbles}>
                    {tabletText.map((entry, index) => (
                        <div className={cn(s.tablet, `tablet_${index}`)} key={index}>
                            <div className={cn("abus_title", s.entry_title)}>{entry.title}</div>
                            <div className={cn("abus_text", s.entry_text)}>{entry.text}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Abus5Learning;