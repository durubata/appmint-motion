import React, { useEffect, useRef } from 'react';
import { useChatStore } from 'chat-store';
const status = ['pending', 'delivered', 'read', 'error'];
export const ChatHistory = () => {
  const { hasUpdate, activeFriend, getMessages, user } = useChatStore(state => state);
  const messagesColumnRef = useRef(null);
  const [messages, setMessages] = React.useState<any[]>([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(getMessages(activeFriend))
    scrollToBottom();
  }, [hasUpdate]);

  const statusRClasses = {
    pending: 'border-amber-400 border-solid border-r-2',
    delivered: 'border-blue-400 border-solid border-r-2',
    read: 'border-gree-400 border-solid border-r-2',
    error: 'border-red-400 border-solid border-r-2',
  }
  const statusLClasses = {
    pending: 'border-amber-400 border-solid border-l-2',
    delivered: 'border-blue-400 border-solid border-l-2',
    read: 'border-gree-400 border-solid border-l-2',
    error: 'border-red-400 border-solid border-l-2',
  }

  const scrollToBottom = () => {
    console.log('Scroll');
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getChatMessages = () => {
    return messages?.map((message: any) => {
      console.log(message);
      if (message.data.from !== user?.data?.email) {
        return (
          <div key={message.messageId} className='flex justify-between relative'>
            <div className={`bubble-left bg-[#e8ffd8] flex justify-between relative max-w-[70%] p-3 rounded-xl mb-4 mt-2 min-w-[100px] ` + statusLClasses[message.data.status]}>
              <div className="chats w-full text-sm">
                {message.data.content}
                <div className="chat-time text-[9px] top-[-15px] text-[#000000aa] left-0 absolute">{new Date(message.data.sentTime).toLocaleTimeString()}</div>
                {/* <span className="chat-status">{message.data.status}</span> */}
              </div>
            </div>
            <div className="bubble-spacer"></div>
          </div>
        );
      } else {
        const statusClass = status[message.data.status];
        return (
          <div key={message.messageId} className='flex justify-between relative'>
            <div className="bubble-spacer"></div>
            <div className={`bubble-right  bg-[#e1f5ff] flex justify-between relative max-w-[70%] p-3 rounded-xl mb-4 mt-2 min-w-[100px] text-right ` + statusRClasses[message.data.status]}>
              <div className="chats w-full text-sm">
                {message.data.content}
                <div className="chat-time text-[9px] top-[-15px] text-[#000000aa] right-0 absolute">{new Date(message.data.sentTime).toLocaleTimeString()}</div>
                {/* <span className="chat-status absolute text-[8px]  bottom-0 right-0">{message.data.status}</span> */}
              </div>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div ref={messagesColumnRef} className='w-full h-[calc(100%-250px)] overflow-auto p-2'>
      <div className="chat-history-scroll">
        {getChatMessages()}
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};
