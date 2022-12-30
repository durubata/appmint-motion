import { Routes, Route } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { css, Global } from '@emotion/react';
import { WelcomePage } from 'pages/welcome';
import { SCRoot } from 'styles';
import { ChatPage } from 'pages/chat';
import { ChatRegistrationPage } from 'pages/registration';

//TODO move css to css file, we already have a global CSS file that does exactly this

const DefaultLayout = ({ children }) => (<SCRoot>{children}</SCRoot>)


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
          <Route path="/" element={<DefaultLayout><WelcomePage /></DefaultLayout>} />
          <Route path="/register" element={<DefaultLayout><ChatRegistrationPage /></DefaultLayout>} />
          <Route path="/chat" element={<DefaultLayout><ChatPage /></DefaultLayout>} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </div>
    </>
  );
};
