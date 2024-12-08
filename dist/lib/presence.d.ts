import anime from 'animejs';
interface PresenceOptions {
    target: string | HTMLElement;
    enter: anime.AnimeParams;
    exit: anime.AnimeParams;
}
export default function animatePresence({ target, enter, exit }: PresenceOptions): () => void;
export {};
