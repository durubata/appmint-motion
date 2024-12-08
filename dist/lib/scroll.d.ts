import anime from 'animejs';
interface ScrollOptions {
    target: string | HTMLElement;
    animation: anime.AnimeParams;
}
export default function animateOnScroll({ target, animation }: ScrollOptions): void;
export {};
