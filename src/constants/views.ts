import { SettingPage } from 'pages/setting';
import { HelpPage } from 'pages/help';
import { ChatPage } from 'pages/chat';
import welcomePage from 'pages/welcome';
import { ChatRegistrationPage } from 'pages/registration';

export const HOME_VIEWS = {
  Welcome: welcomePage,
  Registration: ChatRegistrationPage,
  Chat: ChatPage,
  Help: HelpPage,
  Setting: SettingPage,
};

export const HOME_VIEWS_ARRAY = Object.keys(HOME_VIEWS);
console.log(HOME_VIEWS_ARRAY);
