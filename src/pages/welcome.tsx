import { WelcomeConvo, WelcomeHeader } from 'components/welcomePage';
import { ScWelcome } from 'components/welcomePage/styles/style';
import React from 'react';

const WelcomePage = () => {
  return (
    <ScWelcome>
      <WelcomeHeader />
      <WelcomeConvo />
    </ScWelcome>
  );
};

export default WelcomePage;
