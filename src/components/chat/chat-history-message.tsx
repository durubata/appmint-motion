import { useChatStore } from 'chat-store';
import { ChatHistoryMessageFile } from './chat-history-message-files';
import { ChatNodeRenderer } from './node-renderer';
import { statusLClasses, statusRClasses } from 'utils';

export const ChatHistoryMessage = ({ conversationId, message }) => {
  const { user } = useChatStore(state => state)

  if (!message) return null;

  if (message.data.contentType) {
    return <ChatNodeRenderer message={message} />
  }

  if (typeof message.data.content !== 'string') {
    return null
  }

  if (message.data.from !== user?.data?.email) {
    return (
      <div className='flex justify-between relative'>
        <div className={`bubble-left bg-[#e8ffd8] flex justify-between relative max-w-[70%] p-3 rounded-xl mb-4 mt-2 min-w-[100px] ` + statusLClasses[message.data.status]}>
          <div className="chats w-full text-sm">
            {message.data.files && <ChatHistoryMessageFile files={message.data.files} />}
            {message.data.content}
            <div className="chat-time text-[9px] top-[-15px] text-[#000000aa] left-0 absolute">{new Date(message.data.sentTime).toLocaleTimeString()}</div>
          </div>
        </div>
        <div className="bubble-spacer"></div>
      </div>
    )
  }

  return (
    <div className='flex justify-between relative'>
      <div className="bubble-spacer"></div>
      <div className={`bubble-right  bg-[#e1f5ff] flex justify-between relative max-w-[70%] p-3 rounded-xl mb-4 mt-2 min-w-[100px] text-right ` + statusRClasses[message.data.status]}>
        <div className="chats w-full text-sm">
          {message.data.files && <ChatHistoryMessageFile files={message.data.files} />}
          {message.data.content}
          <div className="chat-time text-[9px] top-[-15px] text-[#000000aa] right-0 absolute">{new Date(message.data.sentTime).toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
};
