import { ChatMessage } from './chat-message';
import { ChatHistory } from './chat-history';
import { useState } from 'react';

export const ChatConvo = () => {
  const [search] = useState();

  const handleChange = e => { };
  return (
    <div className='w-full h-full'>
      <div className=' w-full bg-white p-2 mb-1 shadow '>
        <input className=' w-full bg-white px-2 ' type="text" value={search} placeholder="Search" onChange={handleChange} />
      </div>
      <ChatHistory />
      <ChatMessage />
    </div>
  );
};
