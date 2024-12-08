import anime from 'animejs';

interface MorphOptions {
    target: string | HTMLElement;
    from: string;
    to: string;
    duration: number;
}

export default function morphSVG({ target, from, to, duration }: MorphOptions) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element || !(element as SVGPathElement).getAttribute) throw new Error('Target must be an SVG path');

    anime({
        targets: element,
        d: [{ value: from }, { value: to }],
        duration,
        easing: 'easeInOutQuad',
    });
}
