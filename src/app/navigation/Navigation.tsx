import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Navigation.module.css';
import { Button } from 'najwer23morsels/lib/button';
import { useTranslationContext } from '../translation/useTranslationContext';

export const Navigation: React.FC<{}> = () => {
  const { lang, setLang } = useTranslationContext();

  return (
    <div className={styles.navigation}>
      <Button
        backgroundColor="orangered"
        height="50px"
        padding={0}
        type="button"
        onClick={() => window.print()}
        width="50px">
        <TextBox desktopSize={16} margin={0} mobileSize={16} color="white">
          PDF
        </TextBox>
      </Button>

      <Button
        backgroundColor="orangered"
        backgroundColorDisabled="#4d4d4d"
        height="50px"
        padding={0}
        type="button"
        onClick={() => setLang('en')}
        disabled={lang === 'en'}
        width="50px">
        <TextBox desktopSize={16} margin={0} mobileSize={16} color="white">
          EN
        </TextBox>
      </Button>

      <Button
        backgroundColor="orangered"
        height="50px"
        padding={0}
        backgroundColorDisabled="#4d4d4d"
        type="button"
        onClick={() => setLang('pl')}
        disabled={lang === 'pl'}
        width="50px">
        <TextBox desktopSize={16} margin={0} mobileSize={16} color="white">
          PL
        </TextBox>
      </Button>
    </div>
  );
};
