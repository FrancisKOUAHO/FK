import {FunctionComponent} from "react";

const Skills: FunctionComponent = () => {

    const skills = [
        {
            name: "VueJS",
            icon: "vuejs.svg",
        },
        {
            name: "NuxtJS",
            icon: "nuxtjs.svg",
        },
        {
            name: "NodeJS",
            icon: "nodejs.svg",
        },
        {
            name: "NodeJS",
            icon: "nodejs.svg",
        },
        {
            name: "AdonisJS",
            icon: "adonisjs.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "MongoDB",
            icon: "mongodb.svg",
        },
        {
            name: "MongoDB",
            icon: "mongodb.svg",
        },
        {
            name: "Jest",
            icon: "jest.svg"
        },
        {
            name: "Docker",
            icon: "docker.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "Figma",
            icon: "figma.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "material-ui",
            icon: "material-ui.svg",
        },
        {
            name: "Typescript",
            icon: "typescript.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "Javascript",
            icon: "javascript.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "PHP",
            icon: "php.svg",
            checked: "text-gradient-primary"
        },
        {
            name: "ReactJS",
            icon: "react.svg",
            checked: "text-gradient-primary",
        },
        {
            name: "ReactJS",
            icon: "react.svg",
            checked: "text-gradient-primary",
        },
        {
            name: "NextJS",
            icon: "nextjs.svg",
            checked: "text-gradient-primary",
        },
        {
            name: "Angular",
            icon: "angular.svg",
            checked: "text-gradient-primary",
        },
        {
            name: "Angular",
            icon: "angular.svg",
            checked: "text-gradient-primary",
        },
    ];

    return (
        <div className="max-w-[100vw] m-auto relative col-start-1 row-start-1">
            <div
                className="absolute top-0 bottom-0 left-0 right-0 w-full bg-gradient-radial from-[#030309] to-darkPurple"></div>


            <div className="relative flex space-x-2 overflow-hidden opacity-10 select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideLeft1"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideLeft2"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-10 select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideRight1"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideRight2"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-10 select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideLeft1"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideLeft2"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-10 select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideRight1"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideRight2"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-10 select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideLeft1"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideLeft2"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative flex space-x-2 overflow-hidden opacity-10 select-none">
                <ul
                    className="flex h-[55px] min-w-full space-x-4 shrink-0 animate-slideRight1"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
                <ul
                    className="absolute top-0 flex min-w-full space-x-2 shrink-0 animate-slideRight2"
                >
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={`skillz/${skill.icon}`} alt={skill.name} className="w-10 h-10"/>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-darkPurple to-darkPurple via-transparent"></div>
        </div>
    )
}

export default Skills