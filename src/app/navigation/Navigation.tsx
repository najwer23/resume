import { useI18n } from 'najwer23lang/react';
import { Button } from 'najwer23morsels/lib/Button';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { GithubLastMody } from '../github/GithubLastMody';

import styles from './Navigation.module.css';

export const Navigation: React.FC<{}> = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className={styles.navigation}>
      <Grid widthMax={'1400px'} layout="flex" margin={'40px 0 20px'}>
        <Grid layout="flex" justifyContent="flex-start" margin={0} gap={{ col: '8px', row: '0' }}>
          <Button variant="secondary" type="button" onClick={() => window.print()}>
            <TextBox desktopSize={16} margin={0} mobileSize={16} color="white">
              PDF
            </TextBox>
          </Button>

          <Button variant="secondary" type="button" onClick={() => setLang('en')} disabled={lang === 'en'}>
            <TextBox desktopSize={16} margin={0} mobileSize={16} color="white">
              EN
            </TextBox>
          </Button>

          <Button variant="secondary" onClick={() => setLang('pl')} disabled={lang === 'pl'}>
            <TextBox desktopSize={16} margin={0} mobileSize={16} color="white">
              PL
            </TextBox>
          </Button>
        </Grid>

        <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'auto 0 auto 0'}>
          <GithubLastMody />
        </Grid>
      </Grid>
    </div>
  );
};
