import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Header.module.css';

export const Header: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles.header}>
      <Grid widthMax={1400} layout="container" padding="0" margin="30px 0 15px 0">
        <TextBox mobileSize={22} desktopSize={22} fontWeight={700} tag={'h2'}>
          {text}
        </TextBox>
        <div className={styles.headerLine}></div>
      </Grid>
    </div>
  );
};
