import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MotionApp from 'app';


// Function to initialize the app
function initializeApp(container: HTMLElement, config: any) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <MotionApp {...(config)} />
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
  };
  initializeApp(document.getElementById('appmint-chat-client') as HTMLElement, props);
}

const md: any = module;
if (md.hot) {
  md.hot.accept(['./locales/i18n'], () => { });
}

reportWebVitals();

