export type FILETYPE = 'video' | 'image' | 'application';

export const imgExts = ['png', 'jpg', 'gif', 'svg', 'tif', 'tiff', 'webp', 'bmp', 'jpeg'];
export const videoExts = ['mpg', 'avi', 'mov', 'wmv', 'flv', 'mp4', 'webm', 'mpeg', 'mkv', 'ogv', 'ogg'];
export const audioExts = ['mp3', 'ogg'];


export const statusRClasses = {
    pending: 'border-amber-400 border-solid border-r-2',
    delivered: 'border-blue-400 border-solid border-r-2',
    read: 'border-green-400 border-solid border-r-2',
    error: 'border-red-400 border-solid border-r-2',
}
export const statusLClasses = {
    pending: 'border-amber-400 border-solid border-l-2',
    delivered: 'border-blue-400 border-solid border-l-2',
    read: 'border-green-400 border-solid border-l-2',
    error: 'border-red-400 border-solid border-l-2',
}


export const greetings = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
        return 'Good Morning'
    }
    else if (currentTime < 18) {
        return 'Good Afternoon'
    }
    else {
        return 'Good Evening'
    }
}

export const getTime = () => {
    return new Date().toLocaleTimeString().toLocaleString();
}

export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}