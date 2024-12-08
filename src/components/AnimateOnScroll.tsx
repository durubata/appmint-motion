import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface AnimateOnScrollProps {
    children: React.ReactNode;
    animation: anime.AnimeParams;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, animation }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && element) {
                    anime({ targets: element, ...animation });
                }
            },
            { threshold: 0.1 }
        );
        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, [animation]);

    return <div ref={ ref }> { children } </div>;
};

export default AnimateOnScroll;
