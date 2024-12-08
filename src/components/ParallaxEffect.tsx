import React, { useEffect, useRef } from 'react';

interface ParallaxEffectProps {
    children: React.ReactNode;
    speed: number;
}

const ParallaxEffect: React.FC<ParallaxEffectProps> = ({ children, speed }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const offset = window.scrollY * speed;
                ref.current.style.transform = `translateY(${offset}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return <div ref={ref}>{children}</div>;
};

export default ParallaxEffect;
