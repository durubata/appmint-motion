import React from 'react';
import { ScWelcomeConvo, ScwelcomeNewChat, ScSvg } from './styles/style';
import { useViewStore } from '../../views-store';
import { WelcomesearchHelp } from '.';
import { IconSends } from 'components/icons';
import { Button } from '@mui/material';

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

const WelcomeConvo = () => {
  const { setScreenItem } = useViewStore(state => state);
  return (
    <ScWelcomeConvo>
      <div className="previous-chat">
        {PreviousChat.map(({ id, name, message, image }) => (
          <ScwelcomeNewChat
            key={id}
            onClick={() => {
              setScreenItem('Chat');
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
      <WelcomesearchHelp />
      <div className="new-conversation">
        <Button onClick={() => setScreenItem('Registration')} variant="contained" className="primary__button" color="success" startIcon={<IconSends />} fullWidth>
          New Conversation
        </Button>
      </div>
    </ScWelcomeConvo>
  );
};

export default WelcomeConvo;
