import React from 'react';
import profileImage from 'assets/img_1292.jpg';
import { fakeUsers } from '../fakedata';

export const ChatContacts = () => {
  return (
    <div className="chat-contacts">
      {fakeUsers.map(user => (
        <div className="chat-contact">
          <div className="chat-contact-image">
            <img src={profileImage} alt="profile-img" />
          </div>
          <div>
            <div className="chat-contact-name">{user.name}</div>
            <div className="chat-contact-email">{user.email}</div>
            <div className="chat-contact-location">{user.country}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
