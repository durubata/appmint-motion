import { ChatMessage } from './chat-message';
import { ChatHistory } from './chat-history';
import { useState } from 'react';
import { IconSearch } from './icons';

export const ChatConvo = () => {
  const [search] = useState();

  const handleChange = e => { };
  return (
    <div className='w-full h-full'>
      <div className=' w-full bg-white p-2 mb-1 shadow flex gap-2 items-center'>
        <input className='w-full bg-white px-2 text-sm ' type="text" value={search} placeholder="Search" onChange={handleChange} />
        <IconSearch className='fill-gray-400' />
      </div>
      <ChatHistory />
      <ChatMessage />
    </div>
  );
};
