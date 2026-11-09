import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const Tracker: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={'70px'} layout="container" margin={'4px 20px 0 0'}></Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          TRACKER
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React Native, Expo, TypeScript, JavaScript, Node.js, Fastify, DynamoDB, JWT, CSS3, AWS Lambda)
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
          {T('Tracker_Description')}
        </TextBox>

        <Typography
          variant="link"
          href="https://youtube.com/shorts/XoHvVMNMyyM"
          mobileSize={14}
          desktopSize={14}
          rel="noreferrer"
          target="_blank"
        >
          https://youtube.com/shorts/XoHvVMNMyyM
        </Typography>
      </Grid>
    </Grid>
  );
};
