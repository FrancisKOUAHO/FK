import {FunctionComponent} from "react";
import TextWrapper from "../TextWrapper.tsx";

const About: FunctionComponent = () => {

    return (
        <div className="c-about__wrapper">
            <TextWrapper>
                Je suis passionné par la danse et
                <span className="ml-4">
                    par code
                </span>
            </TextWrapper>

            <TextWrapper>
                Je trouve de la joie à
                <span> être un père dévoué</span>
                <span>, un mari aimant</span>
                <span>, un ami précieux.</span>
            </TextWrapper>

            <div className="c-about-wrapper__content">
                <a className="c-about__a" href="#">
                    <button
                        className="px-4 py-2 text-xl text-black bg-white border rounded-full font-poppins">Parlons-en
                    </button>
                </a>

                <div className="c-about__name">
                    <h2>Francis <span>KOUAHO</span></h2>
                </div>
            </div>

        </div>
    )
}

export default About;