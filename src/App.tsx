import { RouterHash } from './router/RouterHash';
import { LangProvider } from './translation/useTranslationContext';

export const App = () => {
  return (
    <LangProvider>
      <RouterHash />
    </LangProvider>
  );
};
