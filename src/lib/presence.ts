import anime from 'animejs';

interface PresenceOptions {
    target: string | HTMLElement;
    enter: anime.AnimeParams;
    exit: anime.AnimeParams;
}

export default function animatePresence({ target, enter, exit }: PresenceOptions) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) throw new Error('Target element not found');

    // Example for enter animation
    anime({ targets: element, ...enter });

    return () => {
        // Example for exit animation
        anime({ targets: element, ...exit });
    };
}
