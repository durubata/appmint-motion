import { HOME_VIEWS } from './constants/views';
import create from 'zustand';

interface ChatStoreProps {
  currentView: keyof typeof HOME_VIEWS;
  setStateItem: (screen: keyof typeof HOME_VIEWS) => any;
}

export const useViewStore = create<ChatStoreProps>(set => ({
  currentView: 'Welcome',
  setStateItem: (screen: keyof typeof HOME_VIEWS) => set((state: any) => ({ currentView: screen })),
}));
