import PrimaryButton from "../../components/PrimaryButton/primaryButton";

const TourDates = () => {

    return (
        <article>
            <div>
                <h2>Come and see us live</h2>
                <p>Tour Dates</p>
            </div>
            <section>
                <div>
                    <span>6</span>
                    <span>Nov</span>
                </div>
                <div>
                    <h3>De Mozaiek</h3>
                    <span>Kortrijk</span>
                </div>
                <div>
                    <span>Tickets</span>
                    <span>Info</span>
                </div>
            </section>
            <PrimaryButton content={"See more dates"}/>
        </article>
    )

}

export default TourDates;