import React, { useState } from 'react';

export const ChatSearch = () => {
  const [searhKey, setSearchKey] = useState('')

  const handleChange = (e) => {
    setSearchKey(e.target.value())
  }

  return (
    <div className="chat-search">
      <input type="text" value={searhKey} placeholder="Search" onChange={handleChange} />
    </div>
  );
};
