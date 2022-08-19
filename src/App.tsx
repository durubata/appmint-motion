import { Routes, Route } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { ChatPage } from 'pages/chat';
import { HomePage } from 'pages/home';

// Add comment
export const ChatApp = () => {
  return (
    <div className="data-viz">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="setting" element={<SettingPage />} />
      </Routes>
    </div>
  );
};
