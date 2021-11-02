import PrimaryButton from "../../components/PrimaryButton/primaryButton";
import SecundaryButton from "../../components/SecundaryButton/secundaryButton";
import Cover from "../../assets/images/itTookALifetime.png";

import Style from "./header.module.scss";

const Header = () => {

    return (
        <>
        <article className={Style.container}>
            <h2 className={Style.hidden}>It Took A Lifetime</h2>
            <section className={`${Style.content} ${Style.content__container}`}>
                <div>
                    <h3>New Theatrical concept album</h3>
                    <p>It Took A Lifetime</p>
                    <div>
                        <PrimaryButton />
                        <SecundaryButton />
                    </div>
                </div>
                <img className={Style.cover} src={Cover.src} alt={"It Took A Lifetime cover"} />
            </section>
            <section>
                <h2 className={Style.hidden}>Reviews</h2>
                <div>
                    <a href={''}>
                        <h3>Theater in je oor (★★★★)</h3>
                        <p>Dansende Beren</p>
                    </a>
                </div>
                <div>
                    <a href={""}>
                        <h3>Theater in je oor (★★★★)</h3>
                        <p>Dansende Beren</p>
                    </a>
                </div>
                <div>
                    <a href={""}>
                        <h3>Theater in je oor (★★★★)</h3>
                        <p>Dansende Beren</p>
                    </a>
                </div>
            </section>
        </article>
        
        </>
    );

}

export default Header;