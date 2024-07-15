declare module 'react-images-viewer'

interface AppmintChatClientType {
    init: (container: HTMLElement, config: any) => void;
}

declare global {
    interface Window {
        AppmintChatClient: AppmintChatClientType;
    }
}

export { };