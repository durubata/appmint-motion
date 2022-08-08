import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';

export const ChatInfo = () => {
  const [close, setClose] = useState(false);

  return (
    <div style={{ width: close ? 45 : 500 }} className="chat-info-sidebar">
      <div className='chat-info-toggle-button'>
        <Button onClick={() => setClose(!close)}>{close ? <ArrowBackIcon /> : <ArrowForwardIcon />}</Button>
      </div>
      {close ? null : (
        <div className='content'>
          Profile
        </div>
      )}
    </div>
  );
};
