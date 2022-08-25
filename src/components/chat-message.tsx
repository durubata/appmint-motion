import { IconButton, Button } from '@mui/material';
import { IconAttachment, IconEmoji, IconImage, IconSend, IconScreenShare } from './icons';
import React, { useState } from 'react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { SCActionButton, SCMessage } from 'styles';
import { useMessageStore } from 'chat-store';

const iconSize = 16;

export const ChatMessage = () => {

  const [message, setInputMessage] = useState('')
  const [style, setStyle] = useState<any>({ display: 'none', position: 'absolute' });

  const { setChatMessages } = useMessageStore(state => state)

  const handleChange = (e: any) => {
    setInputMessage(e.target.value)
  }

  const handelEmojiButton = () => {
    if (style.display === 'none') {
      setStyle({ display: 'block', position: 'absolute', bottom: "103px", right: '20px' })
    } else {
      setStyle({ display: 'none', position: 'absolute', })
    }
  }

  const handleEmojiValue = (e: any) => {
    setInputMessage(message + e.native);
  }
 
  const handleSentMessage = (e: any) => {
    setChatMessages({
      message,
      receiver: 'bot',
      senderId: 'user'
    })
    setInputMessage('')
    setStyle({ display: 'none', position: 'absolute' })

    setTimeout(() => {
      setChatMessages({
        message: 'Hello there!',
        receiver: 'user',
        senderId: 'bot'
      })
    }, 1000)
  }

  return (
    <SCMessage>
      <div style={style} className='emoji' >
        <Picker data={data} onEmojiSelect={handleEmojiValue} onFocus='true' previewPosition='none' theme='light'/>
      </div>

      <div className="chat-message">
        <textarea placeholder="message" onChange={handleChange} value={message}>
        </textarea>
        <Button className="chat-send-button" onClick={handleSentMessage}><IconSend size={iconSize} /></Button>
      </div>
      <SCActionButton>
        <IconButton onClick={handelEmojiButton} ><IconEmoji size={iconSize} /> </IconButton>
        <IconButton onClick={null}><IconImage size={iconSize} /></IconButton>
        <IconButton onClick={null}><IconAttachment size={iconSize} /></IconButton>
        <IconButton><IconScreenShare size={iconSize} /></IconButton>
      </SCActionButton>
    </SCMessage>
  );
};
