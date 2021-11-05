import Image from "next/image";
import Style from "./Album.module.scss";

import Text from "../../components/Text/Text";
import Review from "../../components/Review/Review";

import Cover from "../../public/images/itTookALifetime.png";

const Album = () => {

    return (
        <article className={Style.container}>
            <div className={Style.content__container}>
                <section className={Style.content}>
                    <div className={Style.text}>
                        <Text 
                            subtitle={"our new theatrical concept album"}
                            title={"It Took A Lifetime"}
                            content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”."}
                            primaryButton={"stream us!"}
                            primaryButtonLink={"#"}
                            secundaryButton={"Learn More"}
                            secundaryButtonLink={"#"}
                        />
                    </div>
                    <div className={Style.image}>
                        <Image 
                            src={Cover}
                            alt={"It Took A Lifetime"}
                            width={465}
                            height={465}
                        />
                    </div>
                    
                </section>
                <section className={Style.reviews}>
                    <Review
                        link={"#"}
                        quote={"Theater in je oor"}
                        author={"Dansende Beren"}
                    />
                    <Review
                        link={"#"}
                        quote={"Theater in je oor Theater in je oor"}
                        author={"Dansende Beren"}
                    />
                    <Review
                        link={"#"}
                        quote={"Theater in je oor"}
                        author={"Dansende Beren"}
                    />
                </section>
            </div>
            
        </article>
    )


}

export default Album;