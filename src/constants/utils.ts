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


export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}