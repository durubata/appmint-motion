import create from 'zustand'
import { FILETYPE } from 'components/chat-message';


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
