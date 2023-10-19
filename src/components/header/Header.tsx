import NavBar from "./NavBar.tsx";
import {FunctionComponent} from "react";
import HeaderProps from "../../type/HeaderProps.ts";

const Header: FunctionComponent<HeaderProps> = ({customStyle}) => {
    return (
        <header className="c-main-nav" style={customStyle}>
            <a href="https://www.linkedin.com/in/francis-kouaho/" target="_blank">
                <img src="/icons/LinkedIn.svg" alt="" width={21}/>
            </a>

            <NavBar/>

            <a href="https://www.linkedin.com/in/francis-kouaho/" target="_blank">
                <img src="/icons/LinkedIn.svg" alt="" width={21}/>
            </a>
        </header>
    )
}

export default Header