import { FunctionComponent, useEffect, useState } from "react";
import Projects from "../../data/projects.ts";

const Project: FunctionComponent = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    const observerCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                setVisibleItems((prevVisibleItems) => [...prevVisibleItems, Number(entry.target.dataset.index)]);
            } else {
                setVisibleItems((prevVisibleItems) => prevVisibleItems.filter((item) => item !== Number(entry.target.dataset.index)));
            }
        });
    };

    useEffect(() => {
        const projectItems = document.querySelectorAll('.item');
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px 0px -200px 0px",
        };

        const observer = new IntersectionObserver(observerCallback, options);

        projectItems.forEach((item: any, index) => {
            observer.observe(item);
            item.dataset.index = String(index);
        });
    }, []);

    return (
        <ul>
            {Projects.map((project, index) => (
                <li className={`item ${visibleItems.includes(index) ? 'visible' : ''}`} key={index}>
                    <div className="item__background" style={{ backgroundImage: `url('projects/${project.imageUrl}')` }}></div>
                    <div className="item__content">
                        <span className="item__number">{(index + 1).toString().padStart(2, '0')}</span>
                        <h2>{project.title}</h2>
                        <div className="item__metas">
                            <span>Brand</span>
                            <strong>Rebook</strong>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Project;