import { useFileUploadStore } from 'chat-store';
import React, { useState } from 'react';
import { RiFileDownloadLine } from 'react-icons/ri';
import { SCChatBubble, SCHisotry } from 'styles';
import { ChatContactSideBar } from './sidebar-contact';
import { ChatInfo } from './sidebar-info';
import ImgsViewer from 'react-images-viewer';

const status = ['pending', 'delivered', 'read', 'error'];
export const ChatHistory = () => {
  const { fileItems } = useFileUploadStore(state => state);

  const [chats, setChats] = useState(3);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const getRandomInt = max => {
    return Math.floor(Math.random() * max);
  };

  const getChatBubble = (message, type) => {
    return;
  };

  const getChageMessages = () => {
    return Array.from(Array(10).keys()).map(key => {
      for (let i = 0; i < chats; i++) {
        const LoR = getRandomInt(2);
        const msgIndex = getRandomInt(11);
        const msgStatus = getRandomInt(3);
        if (LoR < 1) {
          return (
            <SCChatBubble>
              <div className={`bubble-left message-${status[msgStatus]}`}>{messages[msgIndex]}</div>
              <div className="bubble-spacer"></div>
            </SCChatBubble>
          );
        } else {
          return (
            <SCChatBubble>
              <div className="bubble-spacer"></div>
              <div className={`bubble-right message-${status[msgStatus]}`}>{messages[msgIndex]}</div>
            </SCChatBubble>
          );
        }
      }
    });
  };

  return (
    <SCHisotry onClick={e => setChats(getRandomInt(20))}>
      <div className="chat-history-scroll">{getChageMessages()}</div>
      {fileItems && fileItems.fileType === 'image' && (
        <div style={{ width: 100, height: 100, marginTop: '10px' }}>
          <img src={fileItems.fileUrl} alt="images" width="100%" style={{ cursor: 'pointer' }} onClick={() => setIsImageOpen(true)} />
          <ImgsViewer imgs={[{ src: fileItems.fileUrl }]} isOpen={isImageOpen} backdropCloseable={true} onClose={() => setIsImageOpen(false)} />
        </div>
      )}
      {fileItems && fileItems.fileType === 'application' && (
        <a href={fileItems.fileUrl} style={{ marginTop: '30px', cursor: 'pointer', color: 'grey', display: 'block' }} download>
          <RiFileDownloadLine style={{ fontSize: '40px' }} />
          <div>{fileItems.file.name}</div>
        </a>
      )}
      {fileItems && fileItems.fileType === 'video' && (
        <div style={{ width: 100, height: 100, marginTop: '10px' }}>
          <video id="video" src={fileItems.fileUrl} controls width={200} height={200}></video>
        </div>
      )}
    </SCHisotry>
  );
};

const messages = [
  'If you can’t beat them, dress better than them',
  'Some prompts may imply shipping between',
  'You know how I roll.',
  'And I’m not talking about that time I fell into a pile of dung at the foot of a hill',
  'Goodnight moon.',
  'Goodnight ghosts that only I can see',
  ' If you can’t beat them, dress better than them',
  'I’ve come to a point in my life where I need a stronger word than fuck',
  "threatening the others with a paintball gun: Listen... Life comes at us fast. We don't know what life is gonna give us...And today, it's gonna give you... a paintball!",
  'Halloween display: All these ghosts! All these ghosts! I still can’t find a boo',
  'hat’s right, another year of friendship. Your membership has been renewed.',
  'Dear friends, your Christmas gift this year… is me',
];
