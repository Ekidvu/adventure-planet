"use client"
import cn from "classnames";
import ApplicationForm from "../components/application-form";
import SwiperReviews from "../components/swiper";
import s from "./styles.module.css"
import Footer from "../components/footer-stamp";
import { useEffect, useState } from "react";



function ReviewsPage() {
    const [windowMobile, setWindowMobile] = useState(false);
    const [windowMobile700, setWindowMobile700] = useState(false);

    function getWindowWidth(): void {
        if (window.innerWidth <= 1200) setWindowMobile(true)
        else setWindowMobile(false);
        if (window.innerWidth <= 700) setWindowMobile700(true)
        else setWindowMobile700(false);
    }
    useEffect(() => {
        getWindowWidth();
        window.addEventListener('resize', getWindowWidth, { passive: true });
        return () => {
            window.removeEventListener('resize', getWindowWidth);
        };
    }, [windowMobile])


    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <div className={s.header_margin} style={{ height: "200px" }}></div>
                <section className={s.reviews_section}>
                    <div className={cn(s.title_div, "abus_title")}>ОТЗЫВЫ</div>
                    <div className={s.reviews_div}>
                        <SwiperReviews 
                            perView={3} 
                            slideShadows={false} 
                            depth={30} 
                            rotate={30}
                            reviewsPage
                        />
                    </div>
                </section>
                <section className={s.form_section}>
                    <ApplicationForm />
                </section>
                <footer className={cn("footer_footer", s.footer)}>
                    <Footer/>
                </footer>
                {/* <section style={{ height: "627px" }}></section> */}
            </div>
        </main>
    );
}

export default ReviewsPage;