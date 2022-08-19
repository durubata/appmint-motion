import React from 'react';
import { ChatContactSideBar } from './sidebar-contact';
import { ChatInfo } from './sidebar-info';
import { IconButton } from '@mui/material';
import { IconAddUser, IconMoreH, IconMoreV, IconPhoneCall, IconSearch, IconUser, IconVideo, IconVideoCall } from './icons';
import { ChatProfileCardSmall } from './chat-profile-card';
import { SCActionButton, SCHeader, SCProfileMini } from 'styles';
import profileImage from 'assets/img_1292.jpg'
import { useChatStore } from 'chat-store';


const iconSize = 14;

export const ChatHeader = () => {
  const { setStateItem, sidebarOpen } = useChatStore((state: any) => ({ setStateItem: state.setStateItem, sidebarOpen: state.sidebarOpen }))


  const handleClick = (action) => {
    if (action === 'sidebar') {
      setStateItem({ sidebarOpen: !sidebarOpen })
    }
  }

  return (
    <SCHeader>
      <SCProfileMini>
        <div className='profile-image'><img src={profileImage} alt='' /></div>
        <div className="profile-name">jaclight</div>
      </SCProfileMini>
      <SCActionButton>
        <IconButton><IconAddUser size={iconSize} /></IconButton>
        <IconButton><IconPhoneCall size={iconSize} /></IconButton>
        <IconButton><IconVideoCall size={iconSize} /></IconButton>
        <IconButton onClick={e => handleClick('sidebar')}><IconMoreH size={iconSize} /></IconButton>
      </SCActionButton>
    </SCHeader>
  );
};