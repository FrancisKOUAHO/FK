import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const TextWrapper = ({ children, className }: Props) => {
    const text = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: text,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
    const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
    const colorChange = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [
            "hsla(180, 7%, 75%, 0.9)",
            "hsla(180, 7%, 75%, 0.9)",
            "#D03421",
            "#D03421",
            "#D03421",
            "#D03421",
        ]
    );

    return (
        <div ref={text}>
            <motion.p className={className} style={{ opacity, x, color: colorChange }}>{children}</motion.p>
        </div>
    );
};

export default TextWrapper;