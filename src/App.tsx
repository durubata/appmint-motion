import { Routes, Route } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { WelcomePage } from 'pages/welcome';
import { ChatPage } from 'pages/chat';
import { ChatRegistrationPage } from 'pages/registration';
import 'styles/global.css';
import { IconBack } from 'components/icons';
import { useNavigate } from 'react-router-dom';
import { useChatStore } from 'chat-store';
import { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { classNames } from 'helpers';

export const ChatApp = ({ orgId, chatId, token, theme, language }) => {
  const navigate = useNavigate();
  const { setStateItem, isChatOpen } = useChatStore()
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowChat(isChatOpen)
    }, 200)
  }, [isChatOpen])

  useEffect(() => {
    setStateItem({ orgId: 'demo', chatId: 'askgpt', token, theme, language })
  }, [orgId, chatId, token, theme, language])

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

  return (
    <div className={classNames('fixed bottom-20 right-10 w-fit h-fit')}>
      {showChat && (
        <div className={classNames((isChatOpen) ? 'h-[800px]' : 'h-0', 'w-[400px]  shadow-md rounded-2xl overflow-hidden border-[1px] transition-all duration-200')}>
          <header className="App-header"></header>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/register" element={<ChatRegistrationPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Routes>
        </div>
      )}
      <div className='buttons'>
        {showChat && (
          <button onClick={() => { navigate('/'); }} className='absolute -top-8 shadow rounded-full w-6 h-6 flex items-center justify-center border-gray-100 border hover:scale-150 duration-100' title="Go back">
            <IconBack size={12} />
          </button>)}
        <button className='button-add shadow-[2px_1px_5px_1px_#ccc] m-2 rounded-lg p-2 hover:scale-125 duration-200 transition-all hover:bg-cyan-200 absolute -bottom-16 -right-2' onClick={closeOpenChat}>
          {isChatOpen ? <FaChevronDown size={16} /> : <FaChevronUp size={16} />}
        </button>
      </div>
    </div>
  );
};

export default ChatApp;