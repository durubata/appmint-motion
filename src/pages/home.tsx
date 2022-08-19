import { HOME_VIEWS } from 'constants/index';
import { SCRoot } from 'styles';
import { useViewStore } from 'views-store';

export const HomePage = () => {
  const currentView = useViewStore(state => state.currentView);

  const Component = HOME_VIEWS[currentView];

  return (
    <div>
      <SCRoot>
        <Component />
      </SCRoot>
    </div>
  );
};
