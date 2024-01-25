import Header from "../header/Header.tsx";
import {FunctionComponent} from "react";
import {Canvas} from "@react-three/fiber";
import Experience from "../experience/Experience.tsx";

const Hero: FunctionComponent = () => {
    return (
        <div className="c-hero">
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

                <div className="c-hero__content">
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
