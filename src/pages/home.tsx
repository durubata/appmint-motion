import { HOME_VIEWS, HOME_VIEWS_ARRAY } from 'constants/index';
import React, { useState } from 'react';
import { SCRoot } from 'styles';
import { useViewStore } from 'views-store';

export const HomePage = () => {
  const [activeScreen, setActiveScreen] = useState<string>(HOME_VIEWS_ARRAY[0]);

  const currentView = useViewStore(state => state.currentView);

  const Component = HOME_VIEWS[currentView];

  return (
    <div>
      <SCRoot>
        <Component />
      </SCRoot>
      {HOME_VIEWS_ARRAY.map(screen => (
        <button key={screen} onClick={() => setActiveScreen(screen)}>
          {screen}
        </button>
      ))}
    </div>
  );
};
