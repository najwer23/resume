import { CopyButton } from 'najwer23morsels/lib/copybutton';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Intro.module.css';

const Links: {
  [key: string]: string;
} = {
  'tel:+48571024300': `+48 571 024 300`,
  'mailto:najwer23@live.com': 'najwer23@live.com',
  'https://najwer23.github.io': 'https://najwer23.github.io',
  'https://linkedin.com/in/najwer23': 'https://linkedin.com/in/najwer23',
};

export const Intro: React.FC = () => {
  return (
    <div className={styles.intro}>
      <Grid widthMax={'1400px'} layout="container" padding="0" margin="auto">
        <Grid widthMax={'1400px'} layout="flex" alignItems="flex-start">
          <Grid widthMax={'400px'} layout="container" margin={0}>
            <TextBox color="black" mobileSize={50} desktopSize={50} tag="h1">
              <b>Mariusz</b> Najwer
            </TextBox>
            <TextBox color="orangered" mobileSize={14} desktopSize={14} fontWeight={700} tag="h3">
              Software Engineer
            </TextBox>
            <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={500} tag="h3">
              Wrocław, Poland (open to relocation)
            </TextBox>
          </Grid>

          <Grid layout="container" margin={'15px 0 0 0'}>
            {Object.keys(Links).map((v, i) => (
              <Grid key={i} widthMax={'1400px'} layout="container" className={styles.introContactLinks}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <TextBox
                    color="black"
                    colorHover="orangered"
                    mobileSize={13}
                    desktopSize={13}
                    fontWeight={400}
                    tag="a"
                    key={i}
                    href={v}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {i == 3 ? <b>{Links[v]}</b> : Links[v]}
                  </TextBox>
                  <div className={styles.copyButtonWrapper}>
                    <CopyButton textToCopy={Links[v]} color="white" />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
