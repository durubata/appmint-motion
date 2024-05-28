import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChatApp } from './App'; // Assuming this is the correct import path

const loadChatApp = (containerId: string, props: any = {}) => {
  const rootElement = document.getElementById(containerId);

  if (!rootElement) {
    console.error('ChatWidget: Provided container ID does not exist.');
    return;
  }

  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <ChatApp {...props} />
        </BrowserRouter>
      </React.StrictMode>,
    );
  } else {
    console.error('Chat Widget: Provided container ID does not exist.');
  }
};

// Make the load function available on the window object
window['ChatWidget'] = { load: loadChatApp };

// Optional: Expose module for hot reloading in development environments
const md: any = module;
if (md.hot) {
  md.hot.accept();
}
