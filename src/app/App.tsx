import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LangProvider } from '../translation/useTranslationContext';
import { RouterHash } from './router/RouterHash';

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
