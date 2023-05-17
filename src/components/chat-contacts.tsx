import React from 'react';
import profileImage from 'assets/img_1292.jpg';
import { useChatStore } from 'chat-store';

export const ChatContacts = () => {
  const { conversations, startConversation } = useChatStore(state => state)

  return (
    <div className="chat-contacts">
      {Object.keys(conversations).map(key => {

        const conversation = conversations[key]
        return (
          <div className="chat-contact" onClick={e => startConversation(key)}>
            <div className="chat-contact-name">{key}</div>
            <div className="chat-contact-email">{conversation.length}</div>
          </div>
        )
      })}
    </div>
  );
};
