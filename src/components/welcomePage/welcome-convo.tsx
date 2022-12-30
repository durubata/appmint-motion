import React from 'react';
import { ScWelcomeConvo, ScwelcomeNewChat, ScSvg } from './styles/style';
import { IconSends } from 'components/icons';
import { Button } from '@mui/material';
import { useChatStore } from 'chat-store';
import { useNavigate } from 'react-router-dom';
import { WelcomeSearchHelp } from './welcome-search-help';

const PreviousChat = [
  {
    id: 1,
    name: 'Tayo',
    message: 'Hello, how can I help you?',
    image: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: 2,
    name: 'Spmua',
    message: 'Hello, how can I help you?',
    image: 'https://i.pravatar.cc/150?img=8',
  },
];

export const WelcomeConvo = () => {
  const navigate = useNavigate()
  return (
    <ScWelcomeConvo>
      <div className="previous-chat">
        {PreviousChat.map(({ id, name, message, image }) => (
          <ScwelcomeNewChat
            key={id}
            onClick={() => {
              navigate('/chat');
            }}
          >
            <img className="chat-image" src={image} alt="avatart" />
            <div className="chat-details">
              <p className="chat-details--header">{name}</p>
              <p>{message}</p>
            </div>
            <ScSvg />
          </ScwelcomeNewChat>
        ))}
      </div>
      <WelcomeSearchHelp />
      <div className="new-conversation">
        <Button onClick={() => navigate('/register')} variant="contained" className="primary__button" color="success" startIcon={<IconSends />} fullWidth>
          New Conversation
        </Button>
      </div>
    </ScWelcomeConvo>
  );
};

