import { RouterHash } from './router/RouterHash';
import ReactGA from 'react-ga4';
import { LangProvider } from './translation/useTranslationContext';

ReactGA.initialize('G-4RB2P61JPP');

export const App = () => {
  return (
    <LangProvider>
      <RouterHash />
    </LangProvider>
  );
};
