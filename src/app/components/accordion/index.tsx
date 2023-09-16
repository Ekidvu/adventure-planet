// "use client"
import { useState } from "react";
import s from "./styles.module.css"
import InfoBlock from "../../shows/components/show-page-block";
import { useElementSize } from '../../../hooks/useElementSize';
import cn from "classnames";



function Accordion(prop: {
    showTag: string,
    index: number,
    title: string,
    textList: (string|React.ReactNode)[]
}) {
    const [selected, setSelected] = useState(false);
    const [contentRef, { width, height }] = useElementSize();

    const toggleAccordionState = () => setSelected(!selected);

    return (
        <>
            <section key={prop.index} className={cn(s.showpage_section)}>
                <h1 className={cn("abus_title", s.titles_of_info)} id={prop.showTag}>{prop.title}</h1>
                <div className={s.show_content_box}>
                    <div className={s.video_info_box}>
                        

                    </div>
                    <ul className={cn("abus_text", s.text_info_box)}>
                        {prop.textList.map((text_piece, index) => (
                            <li key={index}>{text_piece}</li>
                        ))}
                        <button className={s.show_accordion_button} onClick={toggleAccordionState}>ПОДРОБНЕЕ</button>
                    </ul>
                </div>
            </section>

            <div style={{ height: selected ? height : "0", overflow: "hidden", transition: "height 0.6s ease" }}>
                <div ref={contentRef}>
                    <InfoBlock showTag={prop.showTag} />
                </div>
            </div>
        </>
    );
}

export default Accordion;

