import Button from "../button/button";
import s from "./styles.module.css"


function GalleryMainPage() {
    return (
        <div className={s.gallery_container}>
            <div className={s.gallery_title}>ГАЛЕРЕЯ</div>
            <div className={s.gallery_carousel}></div>
            <Button round={false} text="БОЛЬШЕ ФОТО" />
        </div>

    );
}

export default GalleryMainPage;