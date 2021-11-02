import PrimaryButton from "../../components/PrimaryButton/primaryButton";
import Style from "./aboutUs.module.scss";
import background from "../../assets/images/aboutus.png";

const AboutUs = () => {

    return (
        <article className={Style.container} style={{backgroundImage: `url(${background.src}`}}>
            <div className={Style.content__container}>
                <div className={Style.header}>
                    <p className={Style.subtitle}>about us</p>
                    <h2 className={Style.title}>our story</h2>
                </div>
                <p className={Style.description}>
                    We are The Black Gasolines, a theatrical rock band founded by 
                    Lukas Debeerst and Bradley Remorie in 2016. After our debut EP 
                    “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman 
                    and went on a quest to play as much as possible. We played more than 45 
                    concerts each year with stops in Ghent, Antwerp, Amsterdam and London and 
                    released 2 singles “Long Way Suicide” and “Kangaroo Days”.
                </p>
                <div className={Style.cta}>
                    <PrimaryButton link={"#"} content={"Learn More"} />
                </div>
            </div>
           
        </article>
    )

}

export default AboutUs;