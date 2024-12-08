import anime from 'animejs';

interface StaggerOptions {
    target: string | HTMLElement[];
    animation: anime.AnimeParams;
    delay: number;
}

export function useStagger({ target, animation, delay }: StaggerOptions) {
    anime({
        targets: target,
        ...animation,
        delay: anime.stagger(delay),
    });
}
