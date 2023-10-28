import NavBar from "./NavBar.tsx";
import {FunctionComponent} from "react";
import HeaderProps from "../../type/HeaderProps.ts";
import {NavLink} from "react-router-dom";

const Header: FunctionComponent<HeaderProps> = ({customStyle}) => {

    return (
        <header className="c-main-nav" style={customStyle}>
            <NavLink to="/">
                <img src="/Francis.png" alt="" width={40}/>
            </NavLink>

            <NavBar/>

            {/*<div className="c-main-nav__sociaux">
                <a href="https://www.linkedin.com/in/francis-kouaho/" target="_blank">
                    <img src="/icons/LinkedIn.svg" alt="" width={25}/>
                </a>
                <a href="https://twitter.com/KouahoFrancis" target="_blank">
                    <img src="/icons/twitter.svg" alt="" width={25}/>
                </a>
            </div>*/}
        </header>
    )
}

export default Header