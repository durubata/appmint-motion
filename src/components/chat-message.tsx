import { IconButton, Button } from '@mui/material';
import { IconAttachment, IconEmoji, IconImage, IconSend, IconScreenShare } from './icons';
import React, { useState, useRef, useEffect } from 'react';
import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';
import { SCActionButton, SCMessage } from 'styles';
import { useFileUploadStore } from 'chat-store';

export type FILETYPE = 'video' | 'image' | 'application';
const iconSize = 16;

export const ChatMessage = props => {
  const { fileItems, setFileItems, removeFileItems } = useFileUploadStore(state => state);

  const [file, setFile] = useState<File>();
  const [message, setMessage] = useState('');
  const [style, setStyle] = useState<any>({ display: 'none', position: 'absolute' });
  const ref = useRef();

  // useEffect(() => {
  //   new Picker({ ...props, data, ref })
  // }, [])

  const handleChange = e => {
    setMessage(e.target.value());
  };

  const handelEmojiButton = e => {
    if (style.display === 'none') {
      setStyle({ display: 'block', position: 'absolute', bottom: '100px', right: '200px' });
    } else {
      setStyle({ display: 'none', position: 'absolute' });
    }
  };

  const handleInputChange = () => {
    if (file) {
      const type = file.type.split('/')[0] as FILETYPE;

      if (type === 'image') {
        setFileItems({ fileType: 'image', fileUrl: URL.createObjectURL(file), file });
      }
      if (type === 'application') {
        setFileItems({ fileType: 'application', fileUrl: URL.createObjectURL(file), file });
      }
      if (type === 'video') {
        setFileItems({ fileType: 'video', fileUrl: URL.createObjectURL(file), file });
      }
    }
  };

  useEffect(() => {
    handleInputChange();

    if (fileItems) {
      return () => {
        URL.revokeObjectURL(fileItems.fileUrl);
        removeFileItems();
      };
    }
  }, [file]);

  return (
    <>
      <SCMessage>
        <div className="chat-message">
          <textarea placeholder="message" onChange={handleChange}>
            {message}
          </textarea>
          <Button className="chat-send-button">
            <IconSend size={iconSize} />
          </Button>
        </div>
        <SCActionButton>
          <IconButton onClick={handelEmojiButton}>
            <IconEmoji size={iconSize} />
          </IconButton>

          <IconButton>
            {/* <input hidden type="file" accept="image/*,video/*,application/*" onChange={e => setFile(e.target.files[0])} /> */}
            <IconImage size={iconSize} />
          </IconButton>

          <IconButton aria-label="upload file" component="label">
            <input hidden type="file" accept="image/*,video/*,application/*" onChange={e => setFile(e.target.files[0])} />
            <IconAttachment size={iconSize} />
          </IconButton>

          <IconButton>
            <IconScreenShare size={iconSize} />
          </IconButton>
        </SCActionButton>
      </SCMessage>
    </>
  );
};
