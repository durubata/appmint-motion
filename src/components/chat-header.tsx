import { IconButton } from '@mui/material';
import { IconAddUser, IconMoreH, IconPhoneCall, IconVideoCall } from './icons';
import { useChatStore } from 'chat-store';

const iconSize = 14;

export const ChatHeader = () => {
  const { setStateItem, sidebarOpen, user, activeFriend } = useChatStore(state => state)

  const handleClick = (action) => {
    if (action === 'sidebar') {
      setStateItem({ sidebarOpen: !sidebarOpen })
    }
  }

  return (
    <div className='h-[60px] overflow-hidden bg-gray-100 flex justify-between p-2 shadow'>
      <div className='flex justify-center text-center gap-2'>
        <div className="profile-name">{activeFriend}</div>
      </div>
      <div >
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600'><IconAddUser size={iconSize} /></IconButton>
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600'><IconPhoneCall size={iconSize} /></IconButton>
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600'><IconVideoCall size={iconSize} /></IconButton>
        <IconButton className='rounded-xl m-2 p-5 bg-white hover:bg-gray-600' onClick={e => handleClick('sidebar')}><IconMoreH size={iconSize} /></IconButton>
      </div>
    </div>
  );
};
