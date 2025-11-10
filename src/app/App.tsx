import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactGA from 'react-ga4';
import { RouterHash } from './router/RouterHash';
import { LangProvider } from './translation/useTranslationContext';

ReactGA.initialize('G-4RB2P61JPP');

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <RouterHash />
      </LangProvider>
    </QueryClientProvider>
  );
};
