import React from 'react';
import { WelcomeFooter, WelcomeHeader } from 'components/welcomePage';
import { WelcomeConvo } from 'components/welcomePage';
import { ScWelcome } from 'components/welcomePage/styles/style';

const WelcomePage = () => {
  return (
    <ScWelcome className="container">
      <div className="header-main">
        <WelcomeHeader />
        <WelcomeConvo />
      </div>

      <WelcomeFooter />
    </ScWelcome>
  );
};

export default WelcomePage;
