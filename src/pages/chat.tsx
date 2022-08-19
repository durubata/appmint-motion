import React from 'react';
import { ChatConvo } from '../components/chat-convo';
import { ChatHeader } from 'components/chat-header';
import { SCRoot } from 'styles';
import { ChatContactSideBar } from 'components/sidebar-contact';
import { useViewStore } from 'views-store';

export const ChatPage = () => {
  const { setScreenItem } = useViewStore((state: any) => state);

  return (
    <SCRoot>
      <button
        onClick={() => {
          setScreenItem('Welcome');
        }}
      >
        Go to Home
      </button>

      <ChatHeader />
      <ChatConvo />

      <ChatContactSideBar />
    </SCRoot>
  );
};
