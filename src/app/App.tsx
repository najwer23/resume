import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from 'najwer23morsels/lib/Theme';
import { RouterHash } from './router/RouterHash';
import { LangProvider } from './translation/useTranslationContext';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <Theme name={'default'}>
          <RouterHash />
        </Theme>
      </LangProvider>
    </QueryClientProvider>
  );
};
