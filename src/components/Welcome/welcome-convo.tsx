import React from 'react';
import { ScWelcomeConvo, ScWelcomeButton, ScwelcomeNewChat } from './styles/style';
import { useViewStore } from '../../views-store';

const WelcomeConvo = () => {
  const { setStateItem } = useViewStore(state => state);
  return (
    <ScWelcomeConvo>
      <span>Conversations</span>
      <ScwelcomeNewChat>
        <span>Logo</span>
        <span onClick={() => setStateItem('Registration')}>Support system</span>
        <span>To New Chat</span>
      </ScwelcomeNewChat>
      <ScWelcomeButton
        onClick={() => {
          setStateItem('Chat');
        }}
      >
        To Previous Chat
      </ScWelcomeButton>
    </ScWelcomeConvo>
  );
};

export default WelcomeConvo;
