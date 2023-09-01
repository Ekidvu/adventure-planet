import Link from "next/link";
import s from "./styles.module.css"
import Button from "../button/button";
import cn from "classnames";
// import TeslaPic from '../../../img/(main page) pic 1st Tesla Show.svg'; 
import teslaPic from '../../../img/(main page) pic 1st Tesla Show.png'; 
import paperPic from '../../../img/(main page) pic 2 Paper Show.png'; 
import cryoPic from '../../../img/(main page) pic 3 Cryo Show.png'; 
import sciencePic from '../../../img/(main page) pic 4 Science Show.png'; 
import soapBubblesPic from '../../../img/(main page) pic 5 Soap bubbles Show.png';
import animationPic from '../../../img/(main page) pic 6 Animation.png'; 
import reviewsPic from '../../../img/(main page) pic 7 Reviews.png'; 
import TeslaIcon from '../../../img/Tesla icon.svg'; 
import PaperIcon from '../../../img/Paper icon.svg'; 
import CryoIcon from '../../../img/Cryo icon.svg'; 
import ScienceIcon from '../../../img/Science icon.svg'; 
import SoapBubblesIcon from '../../../img/Soap bubble icon.svg'; 
import AnimationIcon from '../../../img/Animation icon.svg';

export default function MainPageTextBlock(prop: {alignLeft: boolean, title: string, text: (string|React.ReactNode)[], icon: string, exceptions?: object | undefined}) {
    let titleSign: React.ReactNode;
    let blockPic: React.ReactNode;

    switch (prop.icon) {
        case "teslaIcon":
            titleSign = <TeslaIcon className={s.tb_icons} />;
            blockPic = <img style={{translate: -180}} className={s.pic_move} src={teslaPic.src} alt="" />;
            break;
        case "paperIcon":
            titleSign = <PaperIcon className={s.tb_icons} />;
            blockPic = <img style={{translate: 60}} src={paperPic.src} alt="" />;
            break;
        case "cryoIcon":
            titleSign = <CryoIcon className={s.tb_icons} />;
            blockPic = <img style={{translate: -60}} src={cryoPic.src} alt="" />;
            break;
        case "scienceIcon":
            titleSign = <ScienceIcon className={s.tb_icons} />;
            blockPic = <img src={sciencePic.src} alt="" />;
            break;
        case "soapBubblesIcon":
            titleSign = <SoapBubblesIcon className={s.tb_icons} />;
            blockPic = <img style={{translate: -180}} className={s.pic_move} src={soapBubblesPic.src} alt="" />;
            break;
        case "animationIcon":
            titleSign = <AnimationIcon className={s.tb_icons} />;
            blockPic = <img style={{translate: 50}} src={animationPic.src} alt="" />;
            break;
    
        default:
            break;
    }


    return (
        <div className={cn(s.container)}>
            <div className={s.cont_img}>
                {blockPic}
            </div>
            <div className={cn(s.cont_text, {
                [s.container_left]: prop.alignLeft,
                [s.container_right]: !prop.alignLeft,
            })}>
                <h1 className={s.tb_title}>
                    { prop.alignLeft
                        ? <>{prop.title}{titleSign}</>
                        : <>{titleSign}{prop.title}</> 
                    }
                </h1>
                <div className={s.tb_text}>
                    { prop.text.map((el,i) => <div key={i}>{el}</div>) }
                </div>
                <div className={s.tb_button}>
                    <Button round={false} text="ПОДРОБНЕЕ" />
                </div>
            </div>
        </div>

    )
}

