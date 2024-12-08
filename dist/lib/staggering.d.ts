import anime from 'animejs';
interface StaggerOptions {
    target: string | HTMLElement;
    animation: anime.AnimeParams;
    delay: number;
}
export declare function staggerAnimation({ target, animation, delay }: StaggerOptions): void;
export {};
