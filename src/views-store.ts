import { HOME_VIEWS } from './constants/views';
import create from 'zustand';

interface ChatStoreProps {
  currentView: keyof typeof HOME_VIEWS;
  setStateItem: (screen: keyof typeof HOME_VIEWS) => any;
}

interface FormItems {
  name: string;
  email: string;
  phone: string;
}

interface FormStoreProps {
  formItems: FormItems;
  setFormItems: (items: { name: string; email: string; phone: string }) => void;
}

export const useViewStore = create<ChatStoreProps>(set => ({
  currentView: 'Welcome',
  setStateItem: (screen: keyof typeof HOME_VIEWS) => set((state: any) => ({ currentView: screen })),
}));

export const useFormStore = create<FormStoreProps>(set => ({
  formItems: {
    name: '',
    phone: '',
    email: '',
  },
  setFormItems: (items: FormItems) => set(state => ({ formItems: items })),
}));
