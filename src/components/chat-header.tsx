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

  const profileImage = user?.data?.portrait?.url || `https://ui-avatars.com/api/?name=${activeFriend}&background=random&color=fff&size=128&rounded=true&bold=true&length=1`;
  return (
    <div className='h-[60px] overflow-hidden bg-gray-100 flex justify-between p-2 shadow'>
      <div className="chat-profile-card-smal flex gap-2 items-center text-xs">
        <div className="profile-card-image w-8 h-8">
          <img src={profileImage} />
        </div>
        <div className="profile-card-username">{activeFriend}</div>
      </div>
      <div className='flex gap-2 item-center justify-between' >
        <button className='rounded-xl w-8 h-8 p-2 bg-white hover:scale-125 duration-100'><IconAddUser size={iconSize} /></button>
        <button className='rounded-xl w-8 h-8 p-2 bg-white hover:scale-125 duration-100'><IconPhoneCall size={iconSize} /></button>
        <button className='rounded-xl w-8 h-8 p-2 bg-white hover:scale-125 duration-100'><IconVideoCall size={iconSize} /></button>
        <button className='rounded-xl w-8 h-8 p-2 bg-white hover:scale-125 duration-100' onClick={e => handleClick('sidebar')}><IconMoreH size={iconSize} /></button>
      </div>
    </div>
  );
};
