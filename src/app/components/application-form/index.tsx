import { FormEvent, useRef, useState, useEffect } from 'react';
import s from "./styles.module.css";
import cn from 'classnames';
import ReactPortal from '../react-portal/ReactPortal';
// import { log } from 'console';

function ApplicationForm() {
    const [messageSent, setMessageSent] = useState(false);
    const [messageFailed, setMessageFailed] = useState(false);
    const [messageSentShown, setMessageSentShown] = useState(false);
    const [messageFailShown, setMessageFailShown] = useState(false);

    const formDiv = useRef<HTMLFormElement>(null);

    function messageSentSuccess() {
        console.log("Message sent succesfully");
        setMessageSent(true);
        
        setTimeout(() => {
            setMessageSentShown(true);
        }, 100)
        setTimeout(() => {
            setMessageSentShown(false);
            setMessageSent(false);
        }, 3000)
    }
    function messageSentFail() {
        console.log("Error sending message");
        setMessageFailed(true);

        setTimeout(() => {
            setMessageFailShown(true);
        }, 100)
        setTimeout(() => {
            setMessageFailShown(false);
            setMessageFailed(false);
        }, 3000)
    }

    async function submitRequest(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        // const data = {
        //     name: formData.get('name'),
        //     phone: formData.get('phone'),
        //     email: formData.get('email')
        // }

        const response = await fetch("http://localhost:3008/sendmail", {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body: formData,
        })

        response.ok
            ? messageSentSuccess()
            : messageSentFail()

        if (formDiv && formDiv.current) formDiv.current.reset()
    }

    return (
        <form onSubmit={submitRequest} className={cn("app_form_container", s.app_form_container)} ref={formDiv}>
            <div className={s.title_info_div}>
                <div className={cn("abus_title", s.title)}>ОСТАВИТЬ ЗАЯВКУ ИЛИ ЗАКАЗАТЬ ЗВОНОК</div>
                <div className={cn("abus_text", s.info)}>Оставьте заявку и мы свяжемся с вами в ближайшее время</div>
            </div>
            <div className={s.form_cells}>
                <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    placeholder='Имя*'
                    data-symb="*"
                />
                <input
                    type="phone"
                    name="phone"
                    required
                    placeholder='Телефон*'
                    data-symb="*"
                />
                <input
                    type="email"
                    name="email"
                    minLength={5}
                    placeholder='E-mail'
                />
                <div className={s.required_fields}><span>* </span>Обязательно</div>
            </div>
            <div className={s.btn_cont}><button type="submit" className={s.btn} >ОТПРАВИТЬ</button></div>
            
            {(messageSent || messageFailed) && <ReactPortal wrapperId="react-portal-modal-container">
                <>
                    {messageSent && <div className={cn(s.modal_container, s.modal_success, {
                        [s.message_shown]: messageSentShown,
                    })}>
                        Сообщение отправлено
                    </div>}
                    {messageFailed && <div className={cn(s.modal_container, s.modal_failed, {
                        [s.message_shown]: messageFailShown,
                    })}>
                        Сообщение не отправлено
                    </div>}
                </>
            </ReactPortal>
            }
            
            
        </form>
    );
}

export default ApplicationForm;



// const data = {
//     name: String(event.target.name.value),
//     phone: String(event.target.phone.value),
//     email: String(event.target.email.value),
// }
// console.log(data);