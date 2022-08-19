import { SettingPage } from 'pages/setting';
import { HelpPage } from 'pages/help';
import { ChatPage } from 'pages/chat';
import { WelcomePage } from 'pages/welcome';
import { ChatRegistrationPage } from 'pages/registration';

export const HOME_VIEWS = {
  Welcome: WelcomePage,
  Registration: ChatRegistrationPage,
  Chat: ChatPage,
  Help: HelpPage,
  Setting: SettingPage,
};

export const HOME_VIEWS_ARRAY = Object.keys(HOME_VIEWS);
console.log(HOME_VIEWS_ARRAY);
