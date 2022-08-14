import React, { useState } from 'react';
import { IconButton, ButtonGroup } from '@mui/material';
import { ChatConvo } from '../components/chat-convo';
import { IconAddUser, IconPhoneCall, IconVideoCall, IconMoreH } from 'components/icons';
import { ChatHeader } from 'components/chat-header';
import { SCRoot } from 'styles';
import { ChatContactSideBar } from 'components/sidebar-contact';
import { useViewStore } from 'views-store';

const iconSize = 16;
export const ChatPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { setStateItem } = useViewStore(state => state);

  return (
    <SCRoot>
      <button
        onClick={() => {
          setStateItem('Welcome');
        }}
      >
        Go to Home
      </button>

      <ChatHeader />
      <ChatConvo />
      {/* {(activeTab === 0) && <div className="customer-activity" ><ChatMessages /></div>}
        {(activeTab === 1) && <div className="customer-profile" >Map</div>} */}

      <ChatContactSideBar />
    </SCRoot>
  );
};
