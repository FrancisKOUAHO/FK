import {FunctionComponent} from "react";
import Hero from "../components/hero/Hero.tsx";
import Skills from "../components/skills/Skills.tsx";
import Project from "../components/projetcs/Project.tsx";
import {cards} from "../data/cards.ts";
import Card from "../components/Card.tsx";
import HorizontalWrapper from "../components/HorizontalWrapper.tsx";
import About from "../components/about/about.tsx";

const App: FunctionComponent = () => {

    return (
        <>
            <Hero/>

            <section className="c-skill" id="skills">
                <Skills/>
            </section>

            <section className="c-project" id="projects">
                <Project/>
            </section>

            <section className="c-cards">
                <HorizontalWrapper height="40rem" direction={1400}>
                    <div className="cards" style={{right: 0}}>
                        {cards.map((card, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={card.title}
                                    image={card.image}
                                />
                            );
                        })}
                    </div>
                </HorizontalWrapper>
            </section>

            <section className="c-about" id="about">
                <About/>
            </section>
        </>
    )
}

export default App