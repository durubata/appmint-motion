import { IconButton, Button } from '@mui/material';
import { IconAttachment, IconEmoji, IconSend, IconScreenShare } from './icons';
import { SCActionButton, SCMessage } from 'styles';
import { useMessageStore } from 'chat-store';
import React, { useState, useRef } from 'react';
import FileUpload from './FileUpload/fileUpload';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

export type FILETYPE = 'video' | 'image' | 'application';
const iconSize = 16;

export const ChatMessage = props => {
  const [style, setStyle] = useState<any>({ display: 'none', position: 'absolute' });
  const ref = useRef();

  const [message, setInputMessage] = useState('');

  const { setChatMessages } = useMessageStore(state => state);

  const handleChange = (e: any) => {
    setInputMessage(e.target.value);
  };

  const handelEmojiButton = e => {
    if (style.display === 'none') {
      setStyle({ display: 'block', position: 'absolute', bottom: '100px', right: '0' });
    } else {
      setStyle({ display: 'none', position: 'absolute' });
    }
  };

  const handleEmojiValue = (e: any) => {
    setInputMessage(message + e.native);
  };

  const handleSentMessage = () => {
    setChatMessages({
      message,
      receiver: 'bot',
      sender: 'user',
    });
    setInputMessage('');
    setStyle({ display: 'none', position: 'absolute' });

    setTimeout(() => {
      setChatMessages({
        message: 'Hello there!',
        receiver: 'user',
        sender: 'bot',
      });
    }, 1000);
  };

  return (
    <SCMessage>
      <div style={style} className="emoji">
        <Picker data={data} onEmojiSelect={handleEmojiValue} onFocus="true" previewPosition="none" theme="light" />
      </div>

      <div className="chat-message">
        <textarea placeholder="message" onChange={handleChange} value={message}></textarea>
        <Button className="chat-send-button" onClick={handleSentMessage}>
          <IconSend size={iconSize} />
        </Button>
      </div>
      <SCActionButton>
        <IconButton onClick={handelEmojiButton}>
          <IconEmoji size={iconSize} />{' '}
        </IconButton>
        <IconButton aria-label="upload file" component="label">
          <FileUpload />
          <IconAttachment size={iconSize} />
        </IconButton>
        <IconButton>
          <IconScreenShare size={iconSize} />
        </IconButton>
      </SCActionButton>
    </SCMessage>
  );
};
