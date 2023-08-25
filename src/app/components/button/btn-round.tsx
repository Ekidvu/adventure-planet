import s from "./styles.module.css"
import cn from 'classnames'

function ButtonRound( prop: {btn_text: string} ) {
    
    return (
        <a href="#" className={cn(s.button_round, s.buttons)}>
            <span>{prop.btn_text}</span>
        </a>
    );
}

export default ButtonRound;


{/* <button className={cn(s.button_round, s.buttons)}>
<a href="#" type="button" className={s.buttons_a}>{prop.btn_text}</a>
</button> */}