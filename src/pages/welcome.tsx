import React from 'react';
import {WelcomeHeader} from 'components/welcomePage';
import {WelcomeConvo} from 'components/welcomePage';
import { ScWelcome } from 'components/welcomePage/styles/style';

const WelcomePage = () => {


  return (
    <ScWelcome>
      <WelcomeHeader />
      <WelcomeConvo />
    </ScWelcome>
  );
};

export default WelcomePage;
