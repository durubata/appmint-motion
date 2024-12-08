import React from 'react';
import anime from 'animejs';
interface AnimatePresenceProps {
    children: React.ReactNode;
    visible: boolean;
    enter: anime.AnimeParams;
    exit: anime.AnimeParams;
}
declare const AnimatePresence: React.FC<AnimatePresenceProps>;
export default AnimatePresence;
