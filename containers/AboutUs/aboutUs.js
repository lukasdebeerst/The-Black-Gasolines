import Image from "next/image";
import Text from "../../components/Text/Text";
import Style from "./AboutUs.module.scss";

import Bradley from "../../public/images/band_bradley.png";
import Justin from "../../public/images/band_justin.png";
import Lukas from "../../public/images/band_lukas.png";
import Matthias from "../../public/images/band_matthias.png";


const AboutUs = () => {

    return (
        <article className={Style.container}>
            <div className={`${Style.content__container} ${Style.content}`}>
                <div className={Style.images}>
                    <div className={Style.image_1}>
                        <Image 
                            src={Bradley}
                            alt={"bradley"}
                            height={282}
                            width={188}
                        />
                    </div>
                    <div className={Style.image_2}>
                        <Image 
                            src={Lukas}
                            alt={"Lukas"}
                            height={282}
                            width={188}
                        />
                    </div>
                    <div className={Style.image_3}>
                        <Image 
                            src={Justin}
                            alt={"Justin"}
                            height={282}
                            width={188}
                        />
                    </div>
                    <div className={Style.image_4}>
                        <Image 
                            src={Matthias}
                            alt={"Matthias"}
                            height={282}
                            width={188}
                        />
                    </div>
                </div>
                <section className={`${Style.data}`}>
                    <Text  
                        subtitle={"about us"}
                        title={"our story"}
                        content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”."}
                        primaryButton={"Learn more"}
                        primaryButtonLink={"#"}
                    />
                </section>
            </div>
            
        </article>
    )

}

export default AboutUs;