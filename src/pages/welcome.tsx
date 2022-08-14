import React from 'react';
import { useViewStore } from 'views-store';

const WelcomePage = () => {
  const { setStateItem } = useViewStore(state => state);

  return (
    <div>
      WelcomePage to this page
      <button
        onClick={() => {
          setStateItem('Chat');
        }}
      >
        Go to Chat
      </button>
    </div>
  );
};

export default WelcomePage;
