import styles from './Intro.module.css';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { Grid } from 'najwer23morsels/lib/grid';

const Links: {
  [key: string]: string | React.ReactNode;
} = {
  'tel:+48571024300': `+48 571 024 300`,
  'mailto:najwer23@live.com': 'najwer23@live.com',
  'https://najwer23.github.io': 'https://najwer23.github.io',
  'https://www.linkedin.com/in/najwer23': <b>https://www.linkedin.com/in/najwer23</b>,
};

export const Intro: React.FC = () => {
  return (
    <div className={styles.intro}>
      <Grid widthMax={1400} layout="container" padding="0" margin="auto">
        <Grid widthMax={1400} layout="flex">
          <Grid widthMax={400} layout="container" margin={0}>
            <TextBox color="black" mobileSize={50} desktopSize={50} tag="h1">
              <b>Mariusz</b> Najwer
            </TextBox>
            <TextBox color="orangered" mobileSize={14} desktopSize={14} fontWeight={800} tag="h3">
              Software Engineer
            </TextBox>
            <TextBox color="grey" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
              Wrocław, Poland (open to relocation)
            </TextBox>
          </Grid>

          <Grid layout="container" margin={"15px 0 0 0"} >
            {Object.keys(Links).map((v, i) => (
              <Grid key={i} widthMax={1400} layout="container" className={styles.introContactLinks}>
                <TextBox
                  color="grey"
                  colorHover="orangered"
                  mobileSize={13}
                  desktopSize={13}
                  fontWeight={400}
                  tag="a"
                  key={i}
                  href={v}
                  rel="noreferrer"
                  target="_blank">
                  {Links[v]}
                </TextBox>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
