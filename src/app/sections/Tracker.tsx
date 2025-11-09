import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';

export const Tracker: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={1400} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={70} layout="container" margin={'4px 20px 0 0'}></Grid>

      <Grid widthMax={700} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          TRACKER
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={200} tag="h3">
          (React Native, Expo, TypeScript, JavaScript, Fastify, Amazon Dynamodb, JWT, CSS3, AWS Lambda)
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 5px 0'}>
          This project continuously tracks GPS location in the background using a Kalman filter to smooth data and the
          Haversine formula to calculate distance, with secure storage in DynamoDB protected by JWT authentication.
        </TextBox>

        <TextBox
          href="https://www.youtube.com/shorts/XoHvVMNMyyM"
          mobileSize={14}
          desktopSize={14}
          color="orangered"
          colorHover="orangered"
          rel="noreferrer"
          target="_blank">
          https://www.youtube.com/shorts/XoHvVMNMyyM
        </TextBox>
      </Grid>
    </Grid>
  );
};
