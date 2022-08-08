import React from 'react';
import { ChatContactSideBar } from './sidebar-contact';
import { ChatInfo } from './sidebar-info';



export const ChatMessage = () => {
  return (
    <div className="chat-messages-wrapper">
      <ChatContactSideBar />
      <div className='chat-messages' >Chat Messages</div>
      <ChatInfo />
    </div>
  );
};
