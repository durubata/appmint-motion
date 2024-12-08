import React, { useEffect } from 'react';
import anime from 'animejs';

interface AnimatePresenceProps {
    children: React.ReactNode;
    visible: boolean;
    enter: anime.AnimeParams;
    exit: anime.AnimeParams;
}

const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children, visible, enter, exit }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            anime({ targets: ref.current, ...(visible ? enter : exit) });
        }
    }, [visible, enter, exit]);

    return <div ref={ref}>{visible && children}</div>;
};

export default AnimatePresence;
