import React from 'react';
import anime from 'animejs';
interface SpringAnimationProps {
    children: React.ReactNode;
    to: anime.AnimeParams;
    stiffness?: number;
    damping?: number;
}
declare const SpringAnimation: React.FC<SpringAnimationProps>;
export default SpringAnimation;
