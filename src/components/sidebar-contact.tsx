import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { IconChat, IconContact, IconProfile, IconUser, IconUsers } from './icons';
import clsx from 'clsx';
import { ChatContacts } from './chat-contacts';
import { ChatInfo } from './sidebar-info';
import { SCActionButton, SCSearch, SCSideBar } from 'styles';
import { useChatStore } from 'chat-store';

const iconSize = 14;

export const ChatContactSideBar = () => {
  const { setStateItem, sidebarOpen } = useChatStore((state: any) => ({ setStateItem: state.setStateItem, sidebarOpen: state.sidebarOpen }))

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
    <SCSideBar style={{ right: sidebarOpen ? -440 : -80 }} >
      <div className="chat-contact-sidebar-header">
        {!sidebarOpen && (
          <SCActionButton>
            <IconButton title="Contact" className={clsx({ active: activeTab === 0 })} onClick={() => setActiveTab(0)} ><IconContact size={iconSize} /></IconButton>
            <IconButton title="Group" className={clsx({ active: activeTab === 1 })} onClick={() => setActiveTab(1)} ><IconUsers size={iconSize} /></IconButton>
            <IconButton title="Profile" className={clsx({ active: activeTab === 2 })} onClick={() => setActiveTab(2)} ><IconProfile size={iconSize} /></IconButton>
          </SCActionButton>

        )}
        <div className='chat-contact-toggle-button'>
          <IconButton title="Contact" onClick={handleClose} >{sidebarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />}</IconButton>
        </div>
      </div>
      {!sidebarOpen && (
        <>
          <SCSearch>
            <input type="text" value={searhKey} placeholder="Search" onChange={handleChange} />
          </SCSearch>
          <div className='chat-sidebar-content'>
            {activeTab == 0 && <ChatContacts />}
            {activeTab == 1 && <ChatInfo />}
          </div>
        </>
      )}
    </SCSideBar>
  )
};
