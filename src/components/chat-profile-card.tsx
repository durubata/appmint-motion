import React from 'react';
import { ChatContactSideBar } from './sidebar-contact';
import { ChatInfo } from './sidebar-info';
import profileImage from 'assets/img_1292.jpg'


export const ChatProfileCardSmall = () => {
  return (
    <div className="chat-profile-card-small">
      <div className="profile-card-image"><img src={profileImage} alt=''/></div>
      <div className="profile-card-username">jaclight</div>
    </div>
  );
};


export const ChatProfileCardBig = () => {
  return (
    <div className="chat-profile-card-big">
      ChatProfileCartBig
    </div>
  );
};
