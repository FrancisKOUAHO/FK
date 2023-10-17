import {FunctionComponent} from "react";

const NavBar: FunctionComponent = () => {
    return (
        <nav>
            <ul>
                <li className="active"><a href="#">Accueil</a></li>
                <li><a href="#">Compétences</a></li>
                <li><a href="#">Projets</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="">Engagez-moi</a></li>
            </ul>
        </nav>
    )
}

export default NavBar