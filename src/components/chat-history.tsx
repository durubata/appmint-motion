import React, { useEffect, useRef } from 'react';
import { SCChatBubble, SCHisotry } from 'styles';
import { ChatContactSideBar } from './sidebar-contact';
import { ChatInfo } from './sidebar-info';
import { ChatMessage, useMessageStore } from 'chat-store';

const status = ['pending', 'delivered', 'read', 'error'];
export const ChatHistory = () => {
  const { chatMessages } = useMessageStore(state => state);
  const messagesColumnRef = useRef(null);

  const messages = chatMessages.map(({ message }) => message);
  useEffect(() => {
    messagesColumnRef.current.scrollTop = messagesColumnRef.current.scrollHeight;
  }, [messages]);

  const getChatMessages = () => {
    return chatMessages.map((message: ChatMessage) => {
      if (message.sender === 'bot') {
        return (
          <SCChatBubble key={message.messageId}>
            <div className={`bubble-left`}>
              <div className="chats">
                {message.message}
                <span className="chat-time">{message.time}</span>
              </div>
            </div>
            <div className="bubble-spacer"></div>
          </SCChatBubble>
        );
      } else {
        return (
          <SCChatBubble key={message.messageId}>
            <div className="bubble-spacer"></div>
            <div className={`bubble-right message-${message ? status[1] : null}`}>
              <div className="chats">
                {message.message}
                {message.file}
                <span className="chat-time">{message.time}</span>
              </div>
            </div>
          </SCChatBubble>
        );
      }
    });
  };
  return (
    <SCHisotry ref={messagesColumnRef}>
      <div className="chat-history-scroll">
        {/* {getChageMessages()} */}
        {getChatMessages()}
      </div>
    </SCHisotry>
  );
};
