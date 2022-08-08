import { ChatInfo } from './sidebar-info';
import { ChatMessage } from './chat-message';
import { ChatHistory } from './chat-history';
import { SCConvo, SCSearch } from 'styles';
import { useState } from 'react';


export const ChatConvo = () => {
  const [search, setSearch] = useState()

  const handleChange = (e) => {

  }
  return (
    <SCConvo>
      <SCSearch>
        <input type="text" value={search} placeholder="Search" onChange={handleChange} />
      </SCSearch>
      <ChatHistory />
      <ChatMessage />
    </SCConvo>
  );
};
