import NavBar from "./NavBar.tsx";
import {FunctionComponent, useState} from "react";
import HeaderProps from "../../type/HeaderProps.ts";
import Hamburger from "./Hamburger.tsx";

const Header: FunctionComponent<HeaderProps> = ({customStyle}) => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = (e: any): void => {
        e.preventDefault()
        setShowNavbar((prevShowNavbar) => !prevShowNavbar);
    }

    return (
        <header className="c-main-nav" style={customStyle}>
            <img src="/Francis.png" alt="" width={40}/>

            <div className="c-main-nav__hamburger">
                <img src="/icons/hamburger.svg" alt="" width={30} onClick={handleShowNavbar}/>
                <Hamburger showNavbar={showNavbar} handleShowNavbar={handleShowNavbar}/>
            </div>

            <NavBar/>

            <div className="c-main-nav__sociaux">
                <a href="https://www.linkedin.com/in/francis-kouaho/" target="_blank">
                    <img src="/icons/LinkedIn.svg" alt="" width={25}/>
                </a>
                <a href="https://twitter.com/KouahoFrancis" target="_blank">
                    <img src="/icons/twitter.svg" alt="" width={25}/>
                </a>
            </div>
        </header>
    )
}

export default Header