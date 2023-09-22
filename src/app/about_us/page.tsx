import Footer from "../components/footer-stamp";
import Abus1Parties from "./components/abus-1-parties-block";
import Abus2Originality from "./components/abus-2-originality";
import Abus3Preferences from "./components/abus-3-preferences";
import Abus4HelpfulInfo from "./components/abus-4-helpful-info";
import Abus5Learning from "./components/abus-5-learning";
import Abus6ExtraServices from "./components/abus-6-extra-services";
import Abus7AppForm from "./components/abus-7-app-form";
import s from "./styles.module.css";
import cn from "classnames"



function AboutUsPage() {
    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <div className={s.header_margin}></div>
                <section><Abus1Parties /></section>
                <section><Abus2Originality /></section>
                <section><Abus3Preferences /></section>
                <section><Abus4HelpfulInfo /></section>
                <section className={s.abus_5_section}><Abus5Learning /></section>
                <section><Abus6ExtraServices /></section>
                <section style={{}}><Abus7AppForm/></section>
                <footer className={cn("footer_footer", s.footer)}>
                    <Footer/>
                </footer>
            </div>
        </main>
    );
}

export default AboutUsPage;


{/* <section style={{height: "1125px"}}><Abus7AppForm/></section> */}
