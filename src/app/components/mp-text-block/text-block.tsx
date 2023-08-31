import Link from "next/link";
import s from "./styles.module.css"
import Button from "../button/button";
import cn from "classnames";
import TeslaIcon from '../../../img/(main page) pic 1st Tesla Show.svg'

export default function MainPageTextBlock(prop: {alignLeft: boolean, title: string, text: string[], icon: string, exceptions?: object[]}) {
  
    // const icon = `${prop.icon}`;
    console.log(prop.exceptions);
    // const img: Element = <TeslaIcon/> 

    return (
        <div className={s.container}>
            <div className={s.cont_img}>
                <TeslaIcon />
            </div>
            <div className={cn(s.cont_text, {
                [s.container_right]: !prop.alignLeft,
            })}>
                <h1 className={s.tb_title}>{prop.title}</h1>
                <div className={s.tb_text}>
                    { prop.text.map((el,i) => <div key={i}>{el}</div>) }
                    {/* // {prop.text.map((el,i) => { 
                    //     if(!!prop.exceptions.length && el.includes())
                    // <div key={i}>{el}</div>
                    // })} */}
                </div>
                <div className={s.tb_button}>
                    <Button round={false} text="ПОДРОБНЕЕ" />
                </div>
            </div>
        </div>

    )
}