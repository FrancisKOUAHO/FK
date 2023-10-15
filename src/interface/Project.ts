interface Skill {
    name: string;
    icon: string;
}

interface Project {
    title: string;
    link?: string;
    view?: string;
    icon: string;
    imageUrl: string
    description: string;
    skills: Skill[];
}

export default Project;