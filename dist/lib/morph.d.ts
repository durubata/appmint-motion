interface MorphOptions {
    target: string | HTMLElement;
    from: string;
    to: string;
    duration: number;
}
export default function morphSVG({ target, from, to, duration }: MorphOptions): void;
export {};
