import { IconButton, Button } from '@mui/material';
import { IconAttachment, IconEmoji, IconSend, IconScreenShare, IconConnect } from './icons';
import { useChatStore } from 'chat-store';
import React, { useState, useRef } from 'react';
import FileUpload from './FileUpload/fileUpload';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

export type FILETYPE = 'video' | 'image' | 'application';
const iconSize = 16;

export const ChatMessage = props => {
  const [style, setStyle] = useState<any>({ display: 'none', position: 'absolute' });
  const ref = useRef();
  const [files, setFiles] = useState<{ path: string, url?: string }[]>(props.files);
  const [message, setMessage] = useState('');

  const { sendMessage, chatRequest } = useChatStore(state => state);

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handelEmojiButton = e => {
    if (style.display === 'none') {
      setStyle({ display: 'block', position: 'absolute', bottom: '100px', right: '0' });
    } else {
      setStyle({ display: 'none', position: 'absolute' });
    }
  };

  const handleEmojiValue = (e: any) => {
    sendMessage('', message + e.native);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(props.activeFriend, message, files)
    setMessage('')
    setFiles(null)
  };

  const handleConnect = (e) => {
    chatRequest();
  };

  return (
    <div className='w-full h-145px  absolute bottom-0 left-0 border-t-indigo-100 border-t-2'>
      <div style={style} className="emoji">
        <Picker data={data} onEmojiSelect={handleEmojiValue} onFocus="true" previewPosition="none" theme="light" />
      </div>

      <div className="chat-message">
        <textarea placeholder="message" rows={4} onChange={handleChange} value={message}></textarea>
        <Button className="chat-send-button" onClick={handleSendMessage}>
          <IconSend size={iconSize} />
        </Button>
      </div>
      <div>
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600' onClick={handelEmojiButton}>
          <IconEmoji size={iconSize} />{' '}
        </IconButton>
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600' aria-label="upload file" component="label">
          <FileUpload />
          <IconAttachment size={iconSize} />
        </IconButton>
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600'>
          <IconScreenShare size={iconSize} />
        </IconButton>
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600' onClick={handleConnect} >
          <IconConnect size={iconSize} />
        </IconButton>
      </div >
    </div>
  );
};

