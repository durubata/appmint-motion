import anime from 'animejs';

interface ScrollOptions {
    target: string | HTMLElement;
    animation: anime.AnimeParams;
}

export default function animateOnScroll({ target, animation }: ScrollOptions) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) throw new Error('Target element not found');

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                anime({ targets: element, ...animation });
            }
        },
        { threshold: 0.1 }
    );

    observer.observe(element as Element);
}
