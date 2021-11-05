import Text from "../Text/Text";
import Image from "next/image";
import Style from "./TextPicture.module.scss";

const TextPicture = ({left=false, title, subtitle=undefined, content, primaryButton=undefined, primaryButtonLink=undefined, secundaryButton=undefined, secundaryButtonLink=undefined, image, imageAlt, imageWidth, imageHeight}) => {

    return (
        <article className={Style.container}>
            <div className={`${Style.content__container} ${Style.content}`}>
                {left ? (
                    <>
                    <div className={Style.text}>
                        <Text 
                            title={title}
                            subtitle={subtitle}
                            content={content}
                            primaryButton={primaryButton}
                            primaryButtonLink={primaryButtonLink}
                            secundaryButton={secundaryButton}
                            secundaryButtonLink={secundaryButtonLink}
                        />  
                    </div>
                    <div className={Style.image}>
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={364}
                            height={528}
                        />
                    </div>
                    </>
                ) : (
                    <>
                    <div className={Style.image}>
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={364}
                            height={528}
                        />
                    </div>
                    <div className={Style.text}>
                        <Text 
                            title={title}
                            subtitle={subtitle}
                            content={content}
                            primaryButton={primaryButton}
                            primaryButtonLink={primaryButtonLink}
                            secundaryButton={secundaryButton}
                            secundaryButtonLink={secundaryButtonLink}
                        />  
                    </div>
                    </>
                )}

            </div>
        </article>
    )

}

export default TextPicture;