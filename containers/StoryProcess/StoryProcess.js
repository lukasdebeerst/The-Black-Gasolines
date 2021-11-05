import Text from "../../components/Text/Text";
import Image from "next/image";
import Style from "./StoryProcess.module.scss";

import img from "../../public/images/StoryProcess.png";

const StoryProcess = () => {

    return (
        <article className={Style.container}>
            <div className={`${Style.content__container} ${Style.content}`}>
                <section className={Style.textContainer}>
                    <div className={Style.text}>
                        <Text 
                            title={"The Story"}
                            subtitle={"a concept album"}
                            content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”. We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and rel"}
                        />
                    </div>
                    <div className={Style.text}>
                        <Text 
                            title={"The Process"}
                            subtitle={"It really took a lifetime"}
                            content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”. We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and rel"}
                        />
                    </div>
                </section>
                <div className={Style.image}>
                    <Image 
                        src={img}
                        alt={"Story and Process"}
                    />
                </div>
            </div>
        </article>
    )


}

export default StoryProcess;