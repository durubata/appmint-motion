import appmintLogo from '../../assets/logo_mini.png'

export const WelcomeFooter = () => {
  return (
    <a href='https://appmint.io' target='_blank' rel='noopener' className=' absolute bottom-0 text-center w-full p-4 text-gray-400 text-sm  flex justify-center gap-2 items-center'>
      <img src={appmintLogo} alt="Appmint Logo" className='h-6 inline opacity-35' />
      <span>
        Powered by Appmint
      </span>
    </a>
  )
}

