import {FunctionComponent} from "react";
import Hero from "../components/hero/Hero.tsx";
import Skills from "../components/skills/Skills.tsx";

const App: FunctionComponent = () => {
    return (
        <>
            <Hero/>
            <section className="c-skill o-container">
                <h2 className="mb-8 sm:mb-10 text-4xl text-center text-white">Skills</h2>

                <Skills/>
            </section>

        </>
    )
}

export default App