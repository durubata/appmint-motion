import React, { useEffect, useRef } from 'react';
import { useChatStore } from 'chat-store';
import { ChatHistoryMessage } from './chat-history-message';

export const ChatHistory = () => {
  const { timestamp, activeFriend, getMessages, user } = useChatStore(state => state, (ov, nv) => ov.timestamp[nv.activeFriend] === nv.timestamp[nv.activeFriend]
    && ov.activeFriend === nv.activeFriend);

  const messagesColumnRef = useRef(null);
  const [messages, setMessages] = React.useState<any[]>([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(getMessages(activeFriend))
    scrollToBottom();
  }, [timestamp[activeFriend]]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div ref={messagesColumnRef} className='w-full h-[calc(100%-140px)] overflow-auto p-2'>
      <div className="chat-history-scroll">
        {messages?.map((message: any) => {
          const messageId = message.sk?.length > 2 ? message.sk : message.data.uuid;
          return <ChatHistoryMessage key={messageId} message={message} conversationId={activeFriend} />
        })}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};
