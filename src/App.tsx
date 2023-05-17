import { Routes, Route } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { WelcomePage } from 'pages/welcome';
import { ChatPage } from 'pages/chat';
import { ChatRegistrationPage } from 'pages/registration';
import 'styles/global.css';

export const ChatApp = () => {
  return (
    <div className='w-[400px] h-[800px] fixed bottom-0 right-10 border-[1px] border-gray-100 bg-gray-50 overflow-hidden shadow-md' >
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<ChatRegistrationPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </div>
  );
};

