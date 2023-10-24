import {FunctionComponent, useEffect, useState} from "react";

const NavBar: FunctionComponent = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setActiveSection(section.id);
            }
        });
    };

    const handleHashChange = () => {
        setActiveSection(window.location.hash.slice(1));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('hashchange', handleHashChange);
        handleScroll();
        handleHashChange();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (
        <nav>
            <ul>
                <li className={activeSection === 'home' ? 'active' : ''}><a href="#home">Accueil</a></li>
                <li className={activeSection === 'skills' ? 'active' : ''}><a href="#skills">Compétences</a></li>
                <li className={activeSection === 'projects' ? 'active' : ''}><a href="#projects">Projets</a></li>
                <li className={activeSection === 'about' ? 'active' : ''}><a href="#about">À propos</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;