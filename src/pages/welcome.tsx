import React from 'react';
import {WelcomeHeader} from 'components/Welcome';
import {WelcomeConvo} from 'components/Welcome';
import { ScWelcome } from 'components/Welcome/styles/style';

const WelcomePage = () => {


  return (
    <ScWelcome>
      <WelcomeHeader />
      <WelcomeConvo />
    </ScWelcome>
  );
};

export default WelcomePage;
