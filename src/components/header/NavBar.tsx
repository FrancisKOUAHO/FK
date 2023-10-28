import {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

const NavBar: FunctionComponent = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/contact">Contacter-moi</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;