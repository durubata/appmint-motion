import React, { useEffect, useRef } from 'react';
import { useChatStore } from 'chat-store';
const status = ['pending', 'delivered', 'read', 'error'];
export const ChatHistory = () => {
  const { hasUpdate, activeFriend, getMessages, user } = useChatStore(state => state);
  const messagesColumnRef = useRef(null);
  const [messages, setMessages] = React.useState<any[]>([]);

  useEffect(() => {
    setMessages(getMessages(activeFriend))
  }, [hasUpdate]);

  const getChatMessages = () => {
    return messages?.map((message: any) => {
      console.log(message);
      if (message.data.from === user.data.email) {
        return (
          <div key={message.messageId}>
            <div className={`bubble-left`}>
              <div className="chats">
                {message.data.content}
                <span className="chat-time">{message.data.time}</span>
                <span className="chat-time">{message.data.status}</span>
              </div>
            </div>
            <div className="bubble-spacer"></div>
          </div>
        );
      } else {
        return (
          <div key={message.messageId}>
            <div className="bubble-spacer"></div>
            <div className={`bubble-right`}>
              <div className="chats">
                {message.data.content}
                <span className="chat-time">{message.data.time}</span>
                <span className="chat-time">{message.data.status}</span>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div ref={messagesColumnRef}>
      <div className="chat-history-scroll">
        {getChatMessages()}
      </div>
    </div>
  );
};
