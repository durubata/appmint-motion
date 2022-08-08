import { Routes, Route, Link } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { ChatPage } from 'pages/chat';

export const ChatApp = () => {
  return (
    <div className="data-viz">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="setting" element={<SettingPage />} />
      </Routes>
    </div>
  );
};
