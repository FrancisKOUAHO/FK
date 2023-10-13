import {FunctionComponent} from "react";

const NavBar: FunctionComponent = () => {
    return (
        <nav>
            <ul>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="">Hire me</a></li>
            </ul>
        </nav>
    )
}

export default NavBar