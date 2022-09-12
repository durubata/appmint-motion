import { Routes, Route } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { HomePage } from 'pages/home';
import { css, Global } from '@emotion/react';

//TODO move css to css file, we already have a global CSS file that does exactly this
export const ChatApp = () => {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}
      />
      <div className="data-viz">
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Routes>
      </div>
    </>
  );
};
