import anime from 'animejs';
interface SpringOptions {
    target: string | HTMLElement;
    to: anime.AnimeParams;
    stiffness?: number;
    damping?: number;
}
export default function springAnimation({ target, to, stiffness, damping }: SpringOptions): void;
export {};
