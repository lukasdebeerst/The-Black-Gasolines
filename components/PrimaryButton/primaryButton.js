import Style from "./primaryButton.module.scss";

const PrimaryButton = ({content, link}) => {

    return (
        <a className={Style.button} href={link}>{content}</a>
    )

}

export default PrimaryButton;