import Button from '../button/button';
import s from './styles.module.css';
import ReviewsRings from "../../../img/Reviews rings.svg"

function ReviewsMain() {
    return ( 
        <div className={s.container}>
            <h1 className={s.title}>ОТЗЫВЫ</h1>
            <div className={s.carousel}></div>
            <Button round={false} text="ВСЕ ОТЗЫВЫ" />
            <ReviewsRings className={s.rev_rings} />
        </div>
    );
}

export default ReviewsMain;