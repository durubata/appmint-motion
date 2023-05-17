import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { IconChat, IconContact, IconProfile, IconUser, IconUsers } from './icons';
import clsx from 'clsx';
import { ChatContacts } from './chat-contacts';
import { ChatInfo } from './sidebar-info';
import { useChatStore } from 'chat-store';

const iconSize = 14;

export const ChatContactSideBar = () => {
  const { setStateItem, sidebarOpen } = useChatStore((state: any) => ({ setStateItem: state.setStateItem, sidebarOpen: state.sidebarOpen }), (ov, nv) => false)

  const [activeTab, setActiveTab] = useState(0);
  const [searhKey, setSearchKey] = useState('')

  const handleChange = (e) => {
    setSearchKey(e.target.value())
  }

  const handleClose = (e) => {
    setStateItem({ sidebarOpen: !sidebarOpen })
    console.log(sidebarOpen)
  }
  return (
    <div className=' transition absolute w-[400px] top-[80px] bg-white h-full p-2 shadow' style={{ right: !sidebarOpen ? -440 : -80 }} >
      <div className="chat-contact-sidebar-header">
        {sidebarOpen && (
          <div>
            <IconButton title="Contact" className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600' onClick={() => setActiveTab(0)} ><IconContact size={iconSize} /></IconButton>
            <IconButton title="Group" className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600' onClick={() => setActiveTab(1)} ><IconUsers size={iconSize} /></IconButton>
            <IconButton title="Profile" className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600' onClick={() => setActiveTab(2)} ><IconProfile size={iconSize} /></IconButton>
          </div>

        )}
        <div className='chat-contact-toggle-button'>
          <IconButton title="Contact" onClick={handleClose} >{sidebarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}</IconButton>
        </div>
      </div>
      {sidebarOpen && (
        <>
          <div className='w-full'>
            <input className='w-full p-2 border-2' type="text" value={searhKey} placeholder="Search" onChange={handleChange} />
          </div>
          <div className='chat-sidebar-content'>
            {activeTab == 0 && <ChatContacts />}
            {activeTab == 1 && <ChatInfo />}
          </div>
        </>
      )}
    </div>
  )
};
