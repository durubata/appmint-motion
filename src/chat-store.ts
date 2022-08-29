import { getTime, greetings } from './constants/utils';

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
  fileId?: number;
}
interface FileUploadStoreProps {
  fileItems: FileItemsProps[] | null;
  setFileItem: (items: FileItemsProps) => void;
  removeFileItem: () => void;
}

export const useFileUploadStore = create<FileUploadStoreProps>(set => ({
  fileItems: [],
  setFileItem: item => set(state => ({ fileItems: [...state.fileItems, item] })),
  removeFileItem: () => set({ fileItems: null }),
}));

export const useChatStore = create<ChatStoreProps>(set => ({
  messages: {},
  contacts: {},
  groups: {},
  message: {},
  sidebar: '',
  setStateItem: (item: { [key: string]: any }) => set((state: any) => ({ ...item })),
}));

export interface ChatMessage {
  sender: string;
  message?: string;
  time?: string;
  receiver: string;
  messageId?: number;
  file?: JSX.Element;
}

interface MessageProps {
  chatMessages: ChatMessage[];
  setChatMessages: (chatMessage: ChatMessage) => void;
}

export const useMessageStore = create<MessageProps>(set => ({
  chatMessages: [
    {
      message: greetings(),
      messageId: Math.floor(Math.random() * 1000000),
      time: getTime(),
      receiver: 'user',
      sender: 'bot',
    },
  ],
  setChatMessages: ({ message, receiver, sender, file }) =>
    set(state => ({
      chatMessages: [
        ...state.chatMessages,
        {
          message,
          messageId: Math.floor(Math.random() * 1000000),
          time: getTime(),
          receiver,
          sender,
          file,
        },
      ],
    })),
}));
