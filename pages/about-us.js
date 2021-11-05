import Navigation from "../containers/Navigation/Navigation";
import AboutUs from "../containers/AboutUs/AboutUs";
import TextPicture from "../components/TextPicture/TextPicture";
import MeetTheBand from "../containers/MeetTheBand/MeetTheBand";
import Discography from "../containers/Discography/Discography";

import the_early_days from "../public/images/the_early_days.png";

const Aboutus = () => {

    return (
        <>
        <Navigation />
        <main>
            <AboutUs />
            <TextPicture 
                title={"the early days"}
                subtitle={"not that long ago"}
                content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”. We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”.We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”."}
                image={the_early_days}
                imageAlt={"The Early Days"}
            />
               <TextPicture 
                title={"the early days"}
                subtitle={"not that long ago"}
                content={"We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”. We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”.We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”."}
                image={the_early_days}
                imageAlt={"The Early Days"}
                left={true}
            />
            <MeetTheBand />
            <Discography />
        </main>
        </>
    )


}

export default Aboutus;