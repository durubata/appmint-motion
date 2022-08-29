import React, { useEffect, useRef } from 'react';
import { SCChatBubble, SCHisotry } from 'styles';
import { ChatContactSideBar } from './sidebar-contact';
import { ChatInfo } from './sidebar-info';
import { ChatMessage, useMessageStore } from 'chat-store';

const status = ['pending', 'delivered', 'read', 'error'];
export const ChatHistory = () => {
  const { chatMessages } = useMessageStore(state => state);
  const messagesColumnRef = useRef(null);

  console.log(chatMessages);

  // const getRandomInt = (max) => {
  //   return Math.floor(Math.random() * max);
  // }
  // const getChatBubble = (message, type) => {
  //   return
  // }
  // const getChageMessages = () => Array.from(Array(10).keys()).map(key => {
  //   for (let i = 0; i < chats; i++) {
  //     const LoR = getRandomInt(2);
  //     const msgIndex = getRandomInt(11);
  //     const msgStatus = getRandomInt(3);
  //     if (LoR < 1) {
  //       return <SCChatBubble><div className={`bubble-left message-${status[msgStatus]}`}>{messages[msgIndex]}</div><div className='bubble-spacer'></div></SCChatBubble>;
  //     } else {
  //       return <SCChatBubble><div className='bubble-spacer'></div><div className={`bubble-right message-${status[msgStatus]}`}>{[msgIndex]}</div></SCChatBubble>;
  //     }
  //   }
  // })

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
export default ChatHistory;
// const messages = [
//   'If you can’t beat them, dress better than them',
//   'Some prompts may imply shipping between',
//   'You know how I roll.',
//   'And I’m not talking about that time I fell into a pile of dung at the foot of a hill',
//   'Goodnight moon.',
//   'Goodnight ghosts that only I can see',
//   ' If you can’t beat them, dress better than them',
//   'I’ve come to a point in my life where I need a stronger word than fuck',
//   'threatening the others with a paintball gun: Listen... Life comes at us fast. We don\'t know what life is gonna give us...And today, it\'s gonna give you... a paintball!',
//   'Halloween display: All these ghosts! All these ghosts! I still can’t find a boo',
//   'That’s right, another year of friendship. Your membership has been renewed.',
//   'Dear friends, your Christmas gift this year… is me'
// ]
