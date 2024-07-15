import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ChatApp from 'app';

// Function to initialize the app
function initializeApp(container: HTMLElement, config: any) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ChatApp {...config} />
    </React.StrictMode>
  );
}

// Expose the initialization function globally
(window as any).AppmintChatClient = {
  init: initializeApp
};

// Initialize the app if it's running standalone
if (document.getElementById('root')) {
  const props: any = {
    // Add any props you want to pass to the ChatApp component, orgId, chatId, token, theme, language
  };
  initializeApp(document.getElementById('root') as HTMLElement, props);
}

const md: any = module;
if (md.hot) {
  md.hot.accept(['./locales/i18n'], () => { });
}

reportWebVitals();