import { useChatStore } from 'chat-store';

export const ChatContacts = () => {
  const { conversations, startConversation } = useChatStore(state => state)

  const getProfileImage = (key) => {
    const profileImage = `https://ui-avatars.com/api/?name=${key}&background=random&color=fff&size=128&rounded=true&bold=true&length=1`;
    return profileImage;
  };

  return (
    <div className="chat-contacts py-2">
      {Object.keys(conversations).map(key => {
        const conversation = conversations[key]
        return (
          <div key={key} className="chat-contact flex items-center gap-3 mb-2 border-b-gray-100 border-b hover:bg-cyan-50 cursor-pointer" onClick={e => startConversation(key)}>
            <div className="chat-contact-image w-8 h-8 rounded-full">
              <img src={getProfileImage(key)} />
            </div>
            <div className='flex w-full justify-between items-center'>
              <div className="chat-contact-name">{key}</div>
              {conversation?.length > 0 && <div className='text-xs rounded-full shadow-sm px-2 py-1 bg-cyan-100'>{conversation?.length}</div>}
            </div>
          </div>
        )
      })}
    </div>
  );
};
