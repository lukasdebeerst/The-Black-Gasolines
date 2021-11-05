import Style from "./Review.module.scss";

const Review  = ({quote, author, link=undefined}) => {

    const Content = () => {
        return (
            <>
            <h3 className={Style.quote}>{quote}</h3>
            <p className={Style.author}>{author}</p>
            </>
        )
    }

    return (
        <div className={Style.container}>
            {link ? (
                <a className={Style.link} href={link}>
                    <Content />           
                </a>
            ) : (
                <Content />
            )}
        </div>
    )

}

export default Review;