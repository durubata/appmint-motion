import { useChatStore } from 'chat-store';
import { HOME_VIEWS } from 'constants/index';
import { SCRoot } from 'styles';
import { useViewStore } from 'views-store';

export const HomePage = () => {
  // const newitem = useChatStore(state => state.newitem);
  // const addFriend = useChatStore(state => state.addFriend);
  const { addFriend, newitem } = useChatStore(state => ({ addFriend: state.addFriend, newitem: state.newitem }));


  const Component = HOME_VIEWS[currentView];

  return (
    <Component />
  );
};
