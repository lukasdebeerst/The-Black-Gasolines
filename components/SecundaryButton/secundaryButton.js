import Style from "./secundaryButton.module.scss";

const SecundaryButton = ({content, link}) => {

    return (
        <a className={Style.button} href={link}>{content}</a>
    )

}

export default SecundaryButton;