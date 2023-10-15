import {FunctionComponent} from "react";

import skills from "../../data/skills.ts";
import skillsIcons from "../../data/skillsIcons.ts";
import SkillIcon from "../../interface/SkillIcon.ts";
import Skill from "../../interface/Skill.ts";

const Skills: FunctionComponent = () => {

    const addFilter = (e: any, filter: any) => {
        e.target.style.filter = `${filter}`
        e.target.style.transform = "scale(1.2)"
    }

    const removeFilter = (e: any) => {
        e.target.style.filter = "none"
        e.target.style.transform = "none"
    }

    return (
        <div className="max-w-[100vw] m-auto relative col-start-1 row-start-1">
            <div
                className="absolute top-0 bottom-0 left-0 right-0 w-full bg-gradient-radial from-[#030309] to-darkPurple"></div>


            <div className="relative flex space-x-2 overflow-hidden opacity-[0.08] select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideLeft1"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideLeft2"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-[0.08] select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideRight1"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideRight2"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-[0.08] select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideLeft1"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideLeft2"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-[0.08] select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideRight1"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideRight2"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-[0.08] select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideLeft1"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideLeft2"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-[0.08] select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideRight1"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideRight2"
                >
                    {skills.map((skill: Skill, index: number) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-darkPurple to-darkPurple via-transparent"></div>

            <div
                className="absolute top-0 bottom-0 left-0 right-0 flex flex-wrap justify-center items-center mx-auto my-auto w-full gap-10 px-10 md:px-0 md:w-2/2 grid-rows-auto">
                {skillsIcons.map((skillsIcon: SkillIcon, index: number) => (
                    <span className="flex items-center justify-center w-20 h-20" key={index}
                          onMouseEnter={(e) => addFilter(e, `${skillsIcon.filter}`)}
                          onMouseLeave={removeFilter}>
                      <span className="relative cursor-pointer">
                        <img src={`skillz/icons/${skillsIcon.icon}`} alt={skillsIcon.name}/>
                      </span>
                    </span>
                ))}
            </div>


        </div>
    )
}

export default Skills