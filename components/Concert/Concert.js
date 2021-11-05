import Style from "./Concert.module.scss";

const Concert = ({day, month, title, location, ticketsLink=undefined, infoLink=undefined}) => {

    return (
        <div className={Style.container}> 
            <div className={Style.dateContainer}>
                <p className={Style.title}>{day}</p>
                <p>{month}</p>
            </div>
            <div className={Style.titleContainer}>
                <p className={Style.title}>{title}</p>
                <p className={Style.location}>{location}</p>
            </div>
            <div className={Style.linksContainer}>
                {infoLink && (
                    <a href={infoLink}>info</a>
                )}
                {ticketsLink && (
                    <a href={ticketsLink}>Tickets</a>
                )}
                
            </div>
        </div>
    )

}

export default Concert;