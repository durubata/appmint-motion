import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { WelcomePage } from 'pages/welcome';
import { ChatPage } from 'pages/chat';
import { ChatRegistrationPage } from 'pages/registration';
import { IconBack } from 'components/common/icons';
import { getResponseErrorMessage, useChatStore } from 'chat-store';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { classNames } from 'utils';
import { BsChatLeft } from "react-icons/bs";

import 'styles/global.css';
import { logPageRequest } from 'utils/log-page-request';
import { restHelper } from 'utils/request';

export const ChatApp = ({ orgId, chatId, appId, appKey, theme, language }) => {
  const { setStateItem, isChatOpen, activePath, navigate } = useChatStore()
  const [showChat, setShowChat] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      restHelper.getChatConfig({ orgId, chatId, appId, appKey }).then((res) => {
        setStateItem({ chatConfig: res })
      }).catch((err) => {
        console.error(err)
        setError(getResponseErrorMessage(err))
      }).finally(() => {
        setIsLoading(false)
      })
    })()
    logPageRequest();
  }, [])


  useEffect(() => {
    setTimeout(() => { setShowChat(isChatOpen) }, 200)
  }, [isChatOpen])

  useEffect(() => {
    setStateItem({ orgId, chatId, appKey, appId, theme, language })
  }, [orgId, chatId, appId, appKey, theme, language])

  const closeOpenChat = () => {
    if (isChatOpen) {
      setStateItem({ isChatOpen: false })
    } else {
      setShowChat(true)
      setTimeout(() => {
        setStateItem({ isChatOpen: true })
      }, 50)
    }
  }

  const componentPaths = {
    '/': WelcomePage,
    '/register': ChatRegistrationPage,
    '/chat': ChatPage,
    '/help': HelpPage,
    '/setting': SettingPage
  }

  const Component = componentPaths[activePath] || WelcomePage

  return (
    <div className={classNames('fixed bottom-20 right-10 w-fit h-fit z-50')}>
      {showChat && (
        <div className={classNames((isChatOpen) ? 'h-[800px]' : 'h-0', 'w-[400px]  shadow-md rounded-2xl overflow-hidden border-[1px] transition-all duration-200 bg-white')}>
          <header className="App-header"></header>
          <Component />
        </div>
      )}
      <div className='buttons'>
        {showChat && (
          <button onClick={() => { navigate('/'); }} className='absolute text-purple-800 antialiased bottom-3 left-4 shadow rounded-full w-6 h-6 flex items-center justify-center border-purple-800/80 border hover:scale-125 duration-100' title="Go back">
            <IconBack size={12} />
          </button>)}
        <button className={classNames(showChat && 'bg-purple-100', 'button-add shadow-[2px_1px_5px_1px_#ccc] m-2 rounded-lg px-2 flex gap-2 p-1 group hover:scale-125 duration-200 items-center transition-all hover:bg-purple-100 absolute -bottom-16 text-purple-900 -right-2')} onClick={closeOpenChat}>
          <div className='px-2 group-hover:animate-bounce'> <BsChatLeft size={20} /> </div>  <div className='h-6 w-px border-r border-r-gray-300'> </div>{isChatOpen ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />}
        </button>
      </div>
    </div>
  );
};

export default ChatApp;