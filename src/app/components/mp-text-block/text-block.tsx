import Link from "next/link";
import s from "./styles.module.css"
import Button from "../button/button";
import cn from "classnames";
import TeslaPic from '../../../img/(main page) pic 1st Tesla Show.svg' 
// import teslaPic from '../../../img/(main page) pic 1st Tesla Show.png' 
import TeslaIcon from '../../../img/Tesla icon.svg' 

export default function MainPageTextBlock(prop: {alignLeft: boolean, title: string, text: (string|React.ReactNode)[], icon: string, exceptions?: object | undefined}) {
    let titleSign: React.ReactNode;

    switch (prop.icon) {
        case "teslaIcon":
            titleSign = <TeslaIcon className={s.tb_icons} />;
            break;
    
        default:
            break;
    }

    // const teslaPic: StaticImageData = teslaPic;
    // const icon = `${prop.icon}`;
    console.log(titleSign);
    // const img: Element = <TeslaIcon/> 

    return (
        <div className={s.container}>
            <div className={s.cont_img}>
                {/* {teslaPic} */}
                {/* <teslaPic /> */}
                <TeslaPic />
                {/* <img src="../../../img/(main page) pic 1st Tesla Show.png" 
                width={300}
                height={300}
                alt="" /> */}
            </div>
            <div className={cn(s.cont_text, {
                [s.container_right]: !prop.alignLeft,
            })}>
                <h1 className={s.tb_title}>{titleSign}{prop.title}</h1>
                <div className={s.tb_text}>
                    { prop.text.map((el,i) => <div key={i}>{el}</div>) }
                    {/* {prop.text.map((el,i) => {
                        console.log(typeof el);
                         
                        if(el?.key) return el
                        else return <div key={i}>{el}</div>
                    })} */}
                </div>
                <div className={s.tb_button}>
                    <Button round={false} text="ПОДРОБНЕЕ" />
                </div>
            </div>
        </div>

    )
}


// if(el?.type === "span") return el