//Remove this file, we already have robust routing with React Router use that to navigate no need for this
//Move all state to chat-store, check if item already exist then use else create new item to store the state you want
//Routing is done here /App.tsx


import { HOME_VIEWS } from './constants/views';
import create from 'zustand';

interface ChatStoreProps {
  currentView: keyof typeof HOME_VIEWS;
  setScreenItem: (screen: keyof typeof HOME_VIEWS) => any;
}

interface FormItems {
  name: string;
  email: string;
  phone: string;
}

interface FormStoreProps {
  formItems: FormItems;
  setFormItems: (items: FormItems) => void;
}

export const useViewStore = create<ChatStoreProps>(set => ({
  currentView: 'Welcome',
  setScreenItem: (screen: keyof typeof HOME_VIEWS) => set((state: any) => ({ currentView: screen })),
}));

export const useFormStore = create<FormStoreProps>(set => ({
  formItems: {
    name: '',
    phone: '',
    email: '',
  },
  setFormItems: (items: FormItems) => set(state => ({ formItems: items })),
}));
