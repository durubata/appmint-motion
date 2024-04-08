import { useEffect, useState } from 'react';
import { ChatConvo } from '../components/chat-convo';
import { ChatHeader } from 'components/chat-header';
import { ChatContactSideBar } from 'components/sidebar-contact';
import io from 'socket.io-client';
import { useChatStore } from 'chat-store';
import { appConfig } from 'config';
import { useNavigate } from 'react-router-dom';

export const ChatPage = () => {
  const storeState = useChatStore(state => state);
  const [socket, setSocket] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const newSocket = io(
      `${appConfig.appengine.host}/chat`, { auth: { token: 'Bearer ' + storeState.token, orgId: appConfig.siteId } }
    );
    newSocket.connect()
    setSocket(newSocket);
    return () => { newSocket.close() };
  }, [setSocket]);

  useEffect(() => {
    const myEmail = storeState.user?.data?.email;
    if (socket) {
      socket.on('message', storeState.onMessage);
      socket.on('update', storeState.onUpdate);
      socket.on('delete', storeState.onDelete);
      socket.on('messages', storeState.onMessages);
      socket.on('joinGroup', storeState.onJoinGroup);
      socket.on('leaveGroup', storeState.onLeaveGroup);
      storeState.setStateItem({ socket, myEmail, navigate })
      storeState.chatRequest();
    }
    return () => {
      socket?.off('message', storeState.onMessage);
      socket?.off('update', storeState.onUpdate);
      socket?.off('delete', storeState.onDelete);
      socket?.off('messages', storeState.onMessages);
      socket?.off('joinGroup', storeState.onJoinGroup);
      socket?.off('leaveGroup', storeState.onLeaveGroup);
    }
  }, [socket]);

  return (
    <div className='w-full h-full' >
      <ChatHeader />
      <ChatConvo />
      <ChatContactSideBar />
    </div>
  );
};
