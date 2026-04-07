import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterHash } from './router/RouterHash';
import { LangProvider } from './translation/useTranslationContext';

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
