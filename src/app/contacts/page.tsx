"use client";
import cn from "classnames";
import s from "./styles.module.css"
import PhoneIcon from "./icons/Phone_icon.svg"
import WhatsAppIcon from "./icons/WhatsApp_icon.svg"
import TelegramIcon from "./icons/Telegram_icon.svg"
import EmailIcon from "./icons/Email_icon.svg"
import ApplicationForm from "../components/application-form";
import Footer from "../components/footer-stamp";


function ContactsPage() {
    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <section style={{ height: "250px" }}></section>
                <section className={s.contact_section}>
                    <div className={s.contact_info_box}>
                        <div className={cn("abus_title", s.contact_title_box)}>
                            <span className={s.contact_title_box_span_text}>КОНТАКТЫ</span>
                        </div>
                        <div className={cn("abus_text", s.abus_text_box)}>
                            <div className={s.contact_text_box_grid}>
                                <div className={s.grid_cell}>
                                    <PhoneIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>Телефон:&nbsp;</span>+7 (926) 458-15-35</div>
                                </div>

                                <div className={s.grid_cell}>
                                    <WhatsAppIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>WhatsApp:&nbsp;</span>+7 (926) 458-15-35</div>
                                </div>

                                <div className={s.grid_cell}>
                                    <TelegramIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>Telegram:&nbsp;</span>@alexandrboytsov</div>
                                </div>

                                <div className={s.grid_cell}>
                                    <EmailIcon />
                                    <div className={s.contact_text_box_grid_text}>&nbsp;<span>E-mail:&nbsp;</span>planeta_priklu4eny@mail.ru</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className={s.form_section}>
                    <ApplicationForm />
                </section>
                <section className={s.footer}>
                    <Footer/>
                </section>
            </div>
        </main>
    );
}

export default ContactsPage;