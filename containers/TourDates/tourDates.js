import Style from "./Tourdates.module.scss";
import Text from "../../components/Text/Text";
import Concert from "../../components/Concert/Concert";

const Tourdates = () => {

    return (
        <article className={Style.container}>
            <div className={Style.content__container}>
                <Text 
                    title={"tour dates"}
                    subtitle={"The Black Gasolines"}
                />
                <div className={Style.concerts}>
                    <Concert 
                        day={6}
                        month={"Nov"}
                        title={"De Mozaïek"}
                        location={"Kortrijk"}
                        ticketsLink={"#"}
                        infoLink={"#"}
                    />
                    <Concert 
                        day={6}
                        month={"Nov"}
                        title={"De Mozaïek"}
                        location={"Kortrijk"}
                        infoLink={"#"}
                    />
                </div>  
            </div>
        </article>
    )

}

export default Tourdates;