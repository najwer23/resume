import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { T } from '../translation/T';

export const Caregiving: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" alignItems="flex-start">
      <Grid widthMin={'69px'} widthMax={'69px'} layout="container" margin={'4px 20px 0 0'}></Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          CAREGIVING
        </TextBox>
        <TextBox color="#808080" mobileSize={13} desktopSize={13} fontWeight={500} tag="h3">
          2025.11 – 2026.09; 11 months;
        </TextBox>

        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 0 0'}>
          {T('Caregiving')}
        </TextBox>
      </Grid>
    </Grid>
  );
};
