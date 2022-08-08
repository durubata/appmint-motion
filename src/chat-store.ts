import create from 'zustand'

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
