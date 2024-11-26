import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ChatApp from 'app';

const demoConfig = {
  orgId: 'demo',
  chatId: '67169ccce05fcd6eb50e6dff',
  appId: 'chat-client',
  appKey: 'hbfn75kfwmjm55vv0wi5',
  theme: 'light',
}

// Function to initialize the app
function initializeApp(container: HTMLElement, config: any) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <ChatApp {...(config)} />
    </React.StrictMode>
  );
}

// Expose the initialization function globally
(window as any).AppmintChatClient = {
  init: initializeApp
};

// Initialize the app if it's running standalone
if (document.getElementById('appmint-chat-client')) {
  const props: any = {
    ...demoConfig
  };
  initializeApp(document.getElementById('appmint-chat-client') as HTMLElement, props);
}

const md: any = module;
if (md.hot) {
  md.hot.accept(['./locales/i18n'], () => { });
}

reportWebVitals();

