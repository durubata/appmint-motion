import anime from 'animejs';

interface StaggerOptions {
    target: string | HTMLElement;
    animation: anime.AnimeParams;
    delay: number;
}

export function staggerAnimation({ target, animation, delay }: StaggerOptions) {
    const element = typeof target === 'string' ? document.querySelectorAll(target) : target;
    if (!element) throw new Error('Target elements not found');

    anime({
        targets: element,
        ...animation,
        delay: anime.stagger(delay),
    });
}
