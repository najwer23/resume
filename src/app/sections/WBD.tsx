import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { T } from '../translation/T';

export const WBD: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={1400} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={70} layout="container" margin={'4px 20px 0 0'}>
        <img src="img/wbd.png" alt="applied systems logo" height={'auto'} width={'69px'} />
      </Grid>

      <Grid widthMax={700} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          WARNER BROS. DISCOVERY, TVN24.pl
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
          Frontend Software Engineer
        </TextBox>
        <TextBox color="grey" mobileSize={13} desktopSize={13} fontWeight={200} tag="h3">
          2023.08 – 2024.08; 1 year; Warsaw, Poland / Remote
        </TextBox>

        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 0 0'}>
          {T('WBD_Description')}
          
          
        </TextBox>

        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={200} tag="h3" margin={'10px 0 0 0'}>
          (React.js, Next.js, TypeScript, JavaScript, HTML, CSS modules, Storybook, Node.js, Fastify, Google Analitycs)
        </TextBox>
      </Grid>
    </Grid>
  );
};
