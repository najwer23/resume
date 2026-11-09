import pl from './../../locales/pl.json';
import { useTranslationContext } from './useTranslationContext';

const catalogs: Record<string, Record<string, string>> = { pl };

export const T = (text: string) => {
  const { lang } = useTranslationContext();
  return catalogs[lang]?.[text] || text;
};
