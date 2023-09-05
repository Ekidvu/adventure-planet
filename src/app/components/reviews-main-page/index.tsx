import Button from '../button/button';
import s from './styles.module.css';


function ReviewsMain() {
    return ( 
        <div className={s.container}>
            <h1 className={s.title}>ОТЗЫВЫ</h1>
            <div className={s.carousel}></div>
            <Button round={false} text="ВСЕ ОТЗЫВЫ" />
        </div>
    );
}

export default ReviewsMain;