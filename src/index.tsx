import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChatApp } from 'App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const props: any = {
  // Add any props you want to pass to the ChatApp component
};
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatApp {...props} />
    </BrowserRouter>
  </React.StrictMode>,
);

const md: any = module;
if (md.hot) {
  md.hot.accept(['./locales/i18n'], () => { });
}

reportWebVitals();
