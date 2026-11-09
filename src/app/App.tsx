import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nProvider } from 'najwer23lang/react';
import { Theme } from 'najwer23morsels/lib/Theme';
import { RouterHash } from './router/RouterHash';
import en from './translation/en.json';
import pl from './translation/pl.json';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider catalogs={{ pl, en }} defaultLang="en">
        <Theme name={'default'}>
          <RouterHash />
        </Theme>
      </I18nProvider>
    </QueryClientProvider>
  );
};
