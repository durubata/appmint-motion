import { useChatStore } from 'chat-store';
import { IconSends } from 'components/icons';

const PreviousChat = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },

];

export const WelcomeConvo = () => {
  const navigate = useChatStore((state) => state.navigate);

  return (
    <div className='convo'>
      <div className="previous-chat">
        <ul role="list" className="p-4">
          {PreviousChat.map((person) => (
            <li key={person.name} className=' mb-2 border-b border-b-gray-200 p-2'>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
          <li className=''>
            <button onClick={() => navigate('/register')} type="button"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm w-full justify-between  text-gray-700 shadow hover:bg-gray-50 flex  mx-auto items-center"
            >
              <div className='text-left '>
                <p className=' p-0 m-0 font-semibold'>Send up a message</p>
                <p className=' p-0 m-0'>we're here to help</p>
              </div>
              <IconSends />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};