import s from "./styles.module.css";
import CitingIcon from "../../../img/citing icon.svg";
import DefaultReviewsAvatar from "../../../img/Reviews avatar.svg";
import Image from "next/image";


function SwiperCard(prop: { data: object }) {
    // console.log(prop.data.avatar);

    return (
        <div className={s.swiper_card}>
            <div className={s.avatar_cont}>
                {prop.data?.avatar.length
                    ? <Image width="100" height="100" src={prop.data.avatar} alt="ава" className={s.avatar} unoptimized />
                    : <DefaultReviewsAvatar className={s.avatar} />
                }
            </div>
            <div className={s.sw_card_info}>
                <div className={s.name}>{prop.data?.name}</div>
                <div className={s.text}>{prop.data?.text}</div>
            </div>

            <div className={s.cite_sign}><CitingIcon /></div>
        </div>
    );
}

export default SwiperCard;

