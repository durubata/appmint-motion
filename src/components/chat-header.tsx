import { IconAddUser, IconPhoneCall, IconVideoCall } from './icons';
import { useChatStore } from 'chat-store';

const iconSize = 14;

export const ChatHeader = () => {
  const { setStateItem, sidebarOpen, user, activeFriend } = useChatStore(state => state)

  const chatContactSideBar = (action) => {
    if (action === 'sidebar') {
      setStateItem({ sidebarOpen: !sidebarOpen })
    }
  }

  const profileImage = user?.data?.portrait?.url || `https://ui-avatars.com/api/?name=${activeFriend}&background=random&color=fff&size=128&rounded=true&bold=true&length=1`;
  return (
    <div className='h-[50px] overflow-hidden bg-gray-100 flex justify-between p-2 shadow'>
      <div className="chat-profile-card-smal flex gap-2 items-center text-xs">
        <div className="profile-card-image w-8 h-8">
          <img src={profileImage} alt="Profile Image" />
        </div>
        <div className="profile-card-username">{activeFriend}</div>
      </div>
      <div className='flex gap-2 item-center justify-between' >
        <button onClick={e => chatContactSideBar('sidebar')} className='rounded-xl w-8 h-8 p-2 bg-white hover:scale-125 duration-100' title="Add User" aria-label="Add User"><IconAddUser size={iconSize} /></button>
        <button className='rounded-xl w-8 h-8 p-2 bg-white hover:scale-125 duration-100' title="Phone Call" aria-label="Phone Call"><IconPhoneCall size={iconSize} /></button>
        <button className='rounded-xl w-8 h-8 p-2 bg-white hover:scale-125 duration-100' title="Video Call" aria-label="Video Call"><IconVideoCall size={iconSize} /></button>
      </div>
    </div>
  );
};
