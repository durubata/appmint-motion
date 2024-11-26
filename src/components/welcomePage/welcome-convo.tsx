import { useChatStore } from 'chat-store';
import { ChatConfigElement } from 'components/common/chat-config-element';
import { IconSends } from 'components/common/icons';


export const WelcomeConvo = () => {
  const { navigate, chatConfig } = useChatStore((state) => state, (o, n) => o.navigate === n.navigate);

  const getAgents = () => {
    return chatConfig?.data?.content?.agents as any[] || [];
  }

  const getOpener = () => {
    if (chatConfig?.data?.content?.chatOpeners?.length > 0) {
      return chatConfig?.data?.content?.chatOpeners[Math.floor(Math.random() * chatConfig?.data?.content?.chatOpeners.length)];
    }
    return null;
  }

  const opener = getOpener();
  return (
    <div className='convo'>
      <div className="previous-chat">
        {chatConfig?.data?.content?.showAgents && (
          getAgents().map((person) => (
            <ChatConfigElement path='agent-profile'>
              <div key={person.screenName} className=' mb-2 border-b border-b-gray-200 py-2 px-4'>
                <div className="flex items-center gap-x-6">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img className="w-full" src={person.avatar?.url} alt="" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.screenName}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.tagLine}</p>
                  </div>
                </div>
              </div>
            </ChatConfigElement>
          ))
        )}
        <div className='py-2 px-4 '>
          <button onClick={() => navigate('/register')} type="button" className="rounded-md bg-white px-3.5 py-2.5 text-sm w-full justify-between  text-gray-700 shadow hover:bg-gray-50 flex  mx-auto items-center">
            <div className='text-left '>
              {opener ? <p className=' p-0 m-0 font-semibold'>{opener}</p> : <>
                <p className=' p-0 m-0 font-semibold'>Chat with us</p>
                <p className=' p-0 m-0'>we're here to help</p>
              </>}
            </div>
            <IconSends />
          </button>
        </div>
      </div>
    </div>
  );
};