import {FunctionComponent} from "react";
import Hero from "../components/hero/Hero.tsx";
import Skills from "../components/skills/Skills.tsx";
import Project from "../components/projetcs/Project.tsx";
import About from "../components/about/about.tsx";

const App: FunctionComponent = () => {
    return (
        <>
            <Hero/>
            <section className="c-skill">
                <h2 className="my-14 sm:mb-20 text-4xl text-center text-white">Compétences</h2>

                <Skills/>
            </section>
            <section className="c-project">
                <h2 className="my-14 sm:mb-20 text-4xl text-center text-white">Projets</h2>

                <div className="o-container">
                    <Project/>
                </div>
            </section>
            <section className="c-about">
                <h2 className="my-14 sm:mb-20 text-4xl text-center text-white">À propos</h2>

                <div className="o-container">
                    <About/>
                </div>
            </section>
        </>
    )
}

export default App