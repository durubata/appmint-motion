import { SettingPage } from 'pages/setting';
import { HelpPage } from 'pages/help';
import { ChatPage } from 'pages/chat';
import welcomePage from 'pages/welcome';

export const HOME_VIEWS = {
  Welcome: welcomePage,
  Chat: ChatPage,
  Help: HelpPage,
  Setting: SettingPage,
};

export const HOME_VIEWS_ARRAY = Object.keys(HOME_VIEWS);
