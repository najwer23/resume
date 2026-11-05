import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import { T } from '../translation/T';

export const FiguresWithBBox: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start">
      <Grid widthMin={'70px'} layout="container" margin={'4px 20px 0 0'}></Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          GEOMETRIC FIGURES WITH BOUNDING BOX
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React.js, Redux.js, JavaScript, TypeScript, HTML5, CSS3)
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 5px 0'}>
          {T('FiguresWithBBox_Description')}
        </TextBox>

        <Typography
          variant="link"
          href="https://najwer23.github.io/react-redux-ts"
          mobileSize={14}
          desktopSize={14}
          rel="noreferrer"
          target="_blank"
        >
          https://najwer23.github.io/react-redux-ts
        </Typography>
      </Grid>
    </Grid>
  );
};
