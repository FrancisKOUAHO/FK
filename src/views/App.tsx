import {FunctionComponent} from "react";
import Hero from "../components/hero/Hero.tsx";
import Skills from "../components/skills/Skills.tsx";
import Project from "../components/projetcs/Project.tsx";

const App: FunctionComponent = () => {
    return (
        <>
            <Hero/>
            <section className="c-skill o-container">
                <h2 className="mb-8 sm:mb-10 text-4xl text-center text-white">Skills</h2>

                <Skills/>
            </section>
            <section className="c-project">
                <h2 className="mb-8 sm:mb-10 text-4xl text-center text-white">Projects</h2>

                <div className="o-container">
                    <Project/>
                </div>
            </section>
        </>
    )
}

export default App