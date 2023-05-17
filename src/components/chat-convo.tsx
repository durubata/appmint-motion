import { ChatMessage } from './chat-message';
import { ChatHistory } from './chat-history';
import { useState } from 'react';

export const ChatConvo = () => {
  const [search] = useState();

  const handleChange = e => { };
  return (
    <div>
      <div>
        <input type="text" value={search} placeholder="Search" onChange={handleChange} />
      </div>
      <ChatHistory />
      <ChatMessage />
    </div>
  );
};
