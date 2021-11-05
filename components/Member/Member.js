import Image from "next/image";
import Style from "./Member.module.scss";


const Member = ({image, name, instrument}) => {

    return (
        <>
        <div className={Style.container}>
            <div className={Style.image}>
                <Image
                    src={image}
                    alt={name}
                    width={259}
                    height={388}
                />
            </div>
            
            <h3 className={Style.name}>{name}</h3>
            <p className={Style.instrument}>{instrument}</p>
        </div>
        </>
    )

}

export default Member;