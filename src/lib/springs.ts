import anime from 'animejs';

interface SpringOptions {
    target: string | HTMLElement;
    to: anime.AnimeParams;
    stiffness?: number;
    damping?: number;
}

export default function springAnimation({ target, to, stiffness = 100, damping = 20 }: SpringOptions) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) throw new Error('Target element not found');

    anime({
        targets: element,
        ...to,
        easing: `spring(${stiffness}, ${damping}, 1, 0)`,
    });
}
