import Style from "./Navigation.module.scss";
import Image from "next/image";
import logo from "../../public/images/logo.svg";


const Navigation = () => {

    const Hamburger = () => {
        return (
            <svg className={Style.hamburger} width="36px" height="20px" viewBox="0 0 36 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g id="Desktop-HD-Copy-24" transform="translate(-576.000000, -178.000000)" stroke="#FFFFFF" stroke-width="2">
                        <g id="Group" transform="translate(577.000000, 178.591346)">
                            <path d="M0.158745269,0.5 L33.3399694,0.5" id="Path-3"></path>
                            <path d="M-4.54747351e-13,9.40865397 L33.1812241,9.40865397" id="Path-3-Copy"></path>
                            <path d="M-4.54747351e-13,18.408654 L33.1812241,18.408654" id="Path-3-Copy-2"></path>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }

    const Menu = () => {

        return (
            <nav className={Style.nav_container}>
                <ul className={Style.nav}>
                    <li><a href={"/watch"}>Watch</a></li>
                    <li><a href={"/listen"}>Listen</a></li>
                    <li><a href={"/about-us"}>About Us</a></li>
                    <li><a href={"/it-took-a-lifetime"}>The Album</a></li>
                    <li><a href={"/tour-dates"}>Tour Dates</a></li>
                    <li><a href={"/epk"}>EPK</a></li>
                    <li><a href={"/contact"}>Contact</a></li>
                </ul>
            </nav>
        )

    }

    return (
        <article className={Style.container}>
            <div className={Style.content__container}>
                <div className={Style.content}>
                    <h1 className={Style.hidden}>The Black Gasolines</h1>
                    <Image 
                        src={logo}
                        alt={"The Black Gasolines"}
                    />
                    <Hamburger />
                    <Menu />
                </div>
            </div>
        </article>
    )

}

export default Navigation;