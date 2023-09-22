import Button from '../button/button';
import s from './styles.module.css';
import ReviewsRings from "../../../img/Reviews rings.svg"
import SwiperReviews from '../swiper';

function ReviewsMain() {
    return ( 
        <div className={s.container}>
            <h1 className={s.title}>ОТЗЫВЫ</h1>
            <div className={s.carousel}>
                <SwiperReviews 
                    perView={window.innerWidth > 1200 ? 3 : 1} 
                    slideShadows={true} 
                    depth={100} 
                    rotate={50} 
                />
            </div>
            {window.innerWidth > 1200 && <Button round={false} text="ВСЕ ОТЗЫВЫ" link="/reviews"/> }
            {window.innerWidth > 1200 && <ReviewsRings className={s.rev_rings} /> }
            
        </div>
    );
}

export default ReviewsMain;