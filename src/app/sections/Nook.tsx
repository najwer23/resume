import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { T } from '../translation/T';

export const Nook: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={'70px'} layout="container" margin={'4px 20px 0 0'}></Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          NOOK
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React.js, TypeScript, Node.js, Fastify, Zustand, Design System, AWS, DynamoDB, Biome.js)
        </TextBox>
        <TextBox
          color="black"
          mobileSize={14}
          desktopSize={14}
          fontWeight={400}
          tag="p"
          margin={'10px 0 5px 0'}
          textWrap="pretty"
        >
          {T('Nook_Description')}
        </TextBox>

        <TextBox
          tag="a"
          href="https://najwer23.github.io/nook"
          mobileSize={14}
          desktopSize={14}
          color="orangered"
          colorHover="orangered"
          rel="noreferrer"
          target="_blank"
        >
          https://najwer23.github.io/nook
        </TextBox>
      </Grid>
    </Grid>
  );
};
