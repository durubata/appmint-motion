import { WelcomeConvo, WelcomeFooter, WelcomeHeader } from 'components/welcomePage';
import { ScWelcome } from 'components/welcomePage/styles/style';

export const WelcomePage = () => {
  return (
    //Component should start with SC capital 
    <ScWelcome className="container">
      <div className="header-main">
        <WelcomeHeader />
        <WelcomeConvo />
      </div>
      <WelcomeFooter />
    </ScWelcome>
  );
};
