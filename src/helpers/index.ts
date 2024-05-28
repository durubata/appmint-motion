export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

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
