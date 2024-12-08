interface ParallaxOptions {
    target: string | HTMLElement;
    speed: number;
}

export default function parallaxEffect({ target, speed }: ParallaxOptions) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) throw new Error('Target element not found');

    window.addEventListener('scroll', () => {
        const offset = window.scrollY * speed;
        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
    });
}
