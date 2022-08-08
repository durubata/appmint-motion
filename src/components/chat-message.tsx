import { IconButton, Button } from '@mui/material';
import { IconAttachment, IconEmoji, IconImage, IconSend, IconScreenShare } from './icons';
import React, { useState, useRef, useEffect } from 'react';
import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'
import { SCActionButton, SCMessage } from 'styles';

const iconSize = 16;
export const ChatMessage = (props) => {

  const [message, setMessage] = useState('')
  const [style, setStyle] = useState<any>({ display: 'none', position: 'absolute' })
  const ref = useRef()

  // useEffect(() => {
  //   new Picker({ ...props, data, ref })
  // }, [])

  const handleChange = (e) => {
    setMessage(e.target.value())
  }

  const handelEmojiButton = (e) => {
    if (style.display === 'none') {
      setStyle({ display: 'block', position: 'absolute', bottom: "100px", right: '200px' })
    } else {
      setStyle({ display: 'none', position: 'absolute', })
    }
  }


  return (
    <SCMessage>
      <div className="chat-message">
        <textarea placeholder="message" onChange={handleChange}>{message}</textarea>
        <Button className="chat-send-button"><IconSend size={iconSize} /></Button>
      </div>
      <SCActionButton>
        <IconButton onClick={handelEmojiButton}><IconEmoji size={iconSize} /></IconButton>
        <IconButton onClick={null}><IconImage size={iconSize} /></IconButton>
        <IconButton onClick={null}><IconAttachment size={iconSize} /></IconButton>
        <IconButton><IconScreenShare size={iconSize} /></IconButton>
      </SCActionButton>
    </SCMessage>
  );
};
