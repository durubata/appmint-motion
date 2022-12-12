import { Routes, Route } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { HomePage } from 'pages/home';
import { css, Global } from '@emotion/react';
import { WelcomePage } from 'pages/welcome';
import { SCRoot } from 'styles';

//TODO move css to css file, we already have a global CSS file that does exactly this

const DefaultLayout = ({ children }) => (<div><SCRoot>{children}</SCRoot></div>)


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
          <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
          <Route path="help" element={<HelpPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="/welcome" element={<DefaultLayout><WelcomePage /></DefaultLayout>} />
        </Routes>
      </div>
    </>
  );
};
