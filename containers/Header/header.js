import PrimaryButton from "../../components/PrimaryButton/primaryButton";
import SecundaryButton from "../../components/SecundaryButton/secundaryButton";
import Cover from "../../assets/images/itTookALifetime.png";

import Style from "./header.module.scss";

const Header = () => {

    return (
        <>
        <article className={Style.container}>
            <h2 className={Style.hidden}>It Took A Lifetime</h2>
            <section className={`${Style.data_container} ${Style.content__container}`}>
                <div className={Style.content} >
                    <h3 className={Style.subtitle}>New Theatrical concept album</h3>
                    <p className={Style.title}>It Took A Lifetime</p>
                    <div class={Style.cta}>
                        <PrimaryButton content={"Stream now!"} link={"#"}/>
                        <SecundaryButton content={"Learn more"} link={"#"} />
                    </div>
                </div>
                <img className={Style.cover} src={Cover.src} alt={"It Took A Lifetime cover"} />
            </section>
            <section className={`${Style.reviews} ${Style.content__container}`}>
                <h2 className={Style.hidden}>Reviews</h2>
                <div className={Style.review}>
                    <a href={''}>
                        <h3 className={Style.reviewTitle}>Theater in je oor (★★★★)</h3>
                        <p>Dansende Beren</p>
                    </a>
                </div>
                <div className={Style.review}>
                    <a href={""}>
                        <h3 className={Style.reviewTitle}>Theater in je oor (★★★★)</h3>
                        <p>Dansende Beren</p>
                    </a>
                </div>
                <div className={Style.review}>
                    <a href={""}>
                        <h3 className={Style.reviewTitle}>Theater in je oor (★★★★)</h3>
                        <p>Dansende Beren</p>
                    </a>
                </div>
            </section>
        </article>
        
        </>
    );

}

export default Header;