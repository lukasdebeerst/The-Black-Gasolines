import Text from "../../components/Text/Text";
import Image from "next/image";
import Style from "./Discography.module.scss";

import Cover from "../../public/images/itTookALifetime.png";

const Discography = () => {

    return (
        <article className={Style.container}>
            <div className={Style.content__container}>
                <Text 
                    title={"our work"}
                    subtitle={"discography"}
                />
                <div className={Style.discography}>
                    <section className={Style.album}>
                        <Image
                            src={Cover}
                            alt={"It Took A Lifetime"}
                        />
                        <Text 
                            title={"it took a lifetime"}
                            subtitle={"2021"}
                            content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”."}
                        />
                    </section>
                    <section className={`${Style.album} ${Style.album_right} `}>
                        <Image
                            src={Cover}
                            alt={"It Took A Lifetime"}
                        />
                        <Text 
                            title={"it took a lifetime"}
                            subtitle={"2021"}
                            content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”."}
                        />
                    </section>
                </div>
            </div>
        </article>
       

    )

}

export default Discography;