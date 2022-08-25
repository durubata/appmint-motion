
import {getTime,greetings} from './constants/utils'

import { FILETYPE } from 'components/chat-message';
import create from 'zustand';


interface ChatStoreProps {
  sidebar?: string;
  messages?: any;
  contacts?: any;
  groups?: any;
  message?: any;
}

interface FileItemsProps {
  fileType: FILETYPE;
  fileUrl: string;
  file: File;
}
interface FileUploadStoreProps {
  fileItems: FileItemsProps | null;
  setFileItems: (items: FileItemsProps) => void;
  removeFileItems: () => void;
}

export const useChatStore = create<ChatStoreProps>(set => ({
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
  file?: File | null,
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
    setChatMessages: ({message,receiver,senderId,file}) => set((state) => ({
      chatMessages: [
        ...state.chatMessages,
        {
          message,
          messageId: Math.floor(Math.random() * 1000000),
          time: getTime(),
          receiver,
          senderId,
          file
        },
      ]
    }))
  })
  
)
export const useFileUploadStore = create<FileUploadStoreProps>(set => ({
  fileItems: null,
  file: null,
  setFileItems: item => set(state => ({ fileItems: item })),
  removeFileItems: () => set({ fileItems: null }),
}));

