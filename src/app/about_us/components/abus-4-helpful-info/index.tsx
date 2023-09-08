import cn from "classnames";
import s from "./styles.module.css"
import { bubbleInfoText } from "./z-bubbles-data";
import InfoBubble from "./components/bubble";


function Abus4HelpfulInfo() {
    return (
        <div className={s.abus_4_container}>
            <section className={s.section}>
                <div className={cn("abus_title", s.abus_title_box)}>
                    <span className={s.abus_title_box_span_text}>Наша планета вращается вокруг солнца, даря радость ребятам с <span style={{fontSize: "32px", lineHeight: "40px", color: "var(--yellow)"}}>2012</span> года</span>
                </div>
                <div className={s.info_bubbles_cont}>
                    {bubbleInfoText.map((bubble, index) => (
                        <div className={cn(`bubble_${index}`, s.bubble)} key={index}>
                            <InfoBubble hw={bubble.hw} text={bubble.text} color={bubble.color}/>
                        </div>
                        
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Abus4HelpfulInfo;