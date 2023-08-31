import s from "./styles.module.css"
import cn from 'classnames'

function Button( prop: {round: boolean, text: string} ) {
    
    return (
        <a href="#" className={cn(s.buttons, {
            [s.button_round]: prop.round,
            [s.button_standart]: !prop.round,
        })}>
            <span>{prop.text}</span>
        </a>
    );
}

export default Button;


{/* <button className={cn(s.button_round, s.buttons)}>
<a href="#" type="button" className={s.buttons_a}>{prop.btn_text}</a>
</button> */}