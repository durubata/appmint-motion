import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChatApp } from './app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatApp />
    </BrowserRouter>
  </React.StrictMode>,
);

const md: any = module;
if (md.hot) {
  md.hot.accept(['./locales/i18n'], () => { });
}

reportWebVitals();
