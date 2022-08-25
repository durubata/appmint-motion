import create from 'zustand'
import {getTime,greetings} from './constants/utils'

interface ChatStoreProps {
  sidebar?: string;
  messages?: any;
  contacts?: any;
  groups?: any;
  message?: any;
}

export const useChatStore = create<ChatStoreProps>((set) => ({
  messages: {},
  contacts: {},
  groups: {},
  message: {},
  sidebar: '',
  setStateItem: (item: { [key: string]: any }) => set((state: any) => ({ ...item })),
}));


interface ChatMessage {
  senderId: string,
  message: string,
  time: string,
  receiver: string,
  messageId: number,
}

interface MessageProps {
  chatMessages: ChatMessage[];
  setChatMessages: (chatMessage) => void;
}


export const useMessageStore = create<MessageProps>((set)=>({

    chatMessages: [
      {
        message: greetings(),
        messageId: Math.floor(Math.random() * 1000000),
        time: getTime(),
        receiver: 'user',
        senderId: 'bot',
      }
      
    ],
    setChatMessages: ({message,receiver,senderId}) => set((state) => ({
      chatMessages: [
        ...state.chatMessages,
        {
          message,
          messageId: Math.floor(Math.random() * 1000000),
          time: getTime(),
          receiver,
          senderId,
        },
      ]
    }))
  })
  
)
