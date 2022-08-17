import React from 'react';
import { WelcomeHeader, WelcomeConvo, WelcomeFooter } from 'components/welcomePage';
import { ScWelcome } from 'components/welcomePage/styles/style';

const WelcomePage = () => {


  return (
    <ScWelcome className='container'>
      <div className='header-main'>
        <WelcomeHeader />
        <WelcomeConvo />
      </div>

      <WelcomeFooter />
    </ScWelcome>
  );
};

export default WelcomePage;
