import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

interface SpringAnimationProps {
    children: React.ReactNode;
    to: anime.AnimeParams;
    stiffness?: number;
    damping?: number;
}

const SpringAnimation: React.FC<SpringAnimationProps> = ({ children, to, stiffness = 100, damping = 20 }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            anime({
                targets: ref.current,
                ...to,
                easing: `spring(${stiffness}, ${damping}, 1, 0)`,
            });
        }
    }, [to, stiffness, damping]);

    return <div ref={ref}>{children}</div>;
};

export default SpringAnimation;
