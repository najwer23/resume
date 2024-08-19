import { RouterHash } from './router/RouterHash';
import { LangProvider } from './translation/useTranslationContext';

import ReactGA from 'react-ga4';

ReactGA.initialize('G-4RB2P61JPP');

export const App = () => {
  return (
    <LangProvider>
      <RouterHash />
    </LangProvider>
  );
};
