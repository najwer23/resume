import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { T } from '../translation/T';

export const DesignSystem: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={'70px'} layout="container" margin={'4px 20px 0 0'}></Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          DESIGN SYSTEM (npm package)
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React.js, TypeScript, JavaScript, CSS Modules, Storybook, Vite, Rollup.js)
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 5px 0'}>
          {T('DesignSystem_Description')}
        </TextBox>

        <TextBox
          href="https://najwer23.github.io/najwer23morsels"
          mobileSize={14}
          desktopSize={14}
          color="orangered"
          colorHover="orangered"
          rel="noreferrer"
          target="_blank"
        >
          https://najwer23.github.io/najwer23morsels
        </TextBox>
      </Grid>
    </Grid>
  );
};
