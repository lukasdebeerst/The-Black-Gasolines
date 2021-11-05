import PrimaryButton from "../../components/PrimaryButton/primaryButton";
import SecundaryButton from "../../components/SecundaryButton/secundaryButton";
import Style from "./Text.module.scss";

const Text = ({title=undefined, subtitle=undefined, content=undefined, primaryButton=undefined, primaryButtonLink=undefined, secundaryButton=undefined, secundaryButtonLink=undefined}) => {

    return (
        <div className={Style.container}>
            {subtitle && (
                <p className={Style.subtitle}>{subtitle}</p>
            )}
            {title && (
                <h2 className={Style.title}>{title}</h2>
            )}
            {content && (
                <p className={Style.content}>{content}</p>
            )}
            <div className={Style.cta}>
                {(primaryButton && primaryButtonLink) &&(
                    <PrimaryButton link={primaryButtonLink} content={primaryButton} />
                )}
                {(secundaryButton && secundaryButtonLink) && (
                    <SecundaryButton link={secundaryButtonLink} content={secundaryButton} />
                )}
            </div>
        </div>
    )

}

export default Text;