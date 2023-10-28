import Header from "../header/Header.tsx";
import {FunctionComponent, useState} from "react";
import {Canvas} from "@react-three/fiber";
import Experience from "../experience/Experience.tsx";

const Hero: FunctionComponent = () => {
    // quand on clique sur le bouton, ca fait apparaitre le texte (c-hero__content)
    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className="c-hero">
            <button className="rotatingText" onClick={handleClick}>
                <svg viewBox="0 0 200 200" width="150" height="150">
                    <defs>
                        <path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0"></path>
                    </defs>
                    <text x="0" y="0">
                        <textPath href="#circle" className="text">
                            ☺️☺️☺️ - Cliquez ici pour en savoir plus ! - ☺️☺️☺️
                        </textPath>
                    </text>
                </svg>
            </button>

            <Canvas
                flat
                camera={{position: [0, 2, 5], fov: 40}}
                className="canvas"
            >
                <Experience/>
            </Canvas>

            <div className="c-hero__wrapper">
                <Header/>

                <h1>Francis <span>KOUAHO</span></h1>

                <div className={`c-hero__content ${show ? 'hidden' : ''}`}>
                    <h2>Bonjour !</h2>
                    <p>Je suis Francis Kouaho, un développeur Front-End passionné par la création d'expériences web
                        exceptionnelles. Mon code est l'intersection de la créativité et de la précision, donnant
                        vie à des
                        interfaces fluides et intuitives. Explorez mon portfolio pour découvrir mes compétences, mes
                        projets
                        innovants et mon parcours professionnel. Si ma passion et mon expertise correspondent à vos
                        besoins,
                        je serais ravi de rejoindre votre équipe pour collaborer à la création de solutions
                        numériques
                        exceptionnelles.</p>
                </div>

                <img
                    className="c-hero__mouse"
                    src="/icons/mouse.svg"
                    alt="Image"
                />
            </div>
        </div>
    )
}

export default Hero