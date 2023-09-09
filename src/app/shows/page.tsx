import s from "./styles.module.css"



function ShowsPage() {
    return (
        <main className={s.main}>
            <div className={s.sections_container}>
                <div className={s.header_margin}></div>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section style={{height: "1125px"}}></section>
            </div>
        </main>
    );
}

export default ShowsPage;