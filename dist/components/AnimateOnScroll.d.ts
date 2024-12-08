import React from 'react';
import anime from 'animejs';
interface AnimateOnScrollProps {
    children: React.ReactNode;
    animation: anime.AnimeParams;
}
declare const AnimateOnScroll: React.FC<AnimateOnScrollProps>;
export default AnimateOnScroll;
