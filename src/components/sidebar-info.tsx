import React, { useState } from 'react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

export const ChatInfo = () => {
  const [close, setClose] = useState(false);

  return (
    <div style={{ width: close ? 45 : 500 }} className="chat-info-sidebar">
      <div className='chat-info-toggle-button'>
        <button onClick={() => setClose(!close)}>{close ? <IoMdArrowBack /> : <IoMdArrowForward />}</button>
      </div>
      {close ? null : (
        <div className='content'>
          Profile
        </div>
      )}
    </div>
  );
};
