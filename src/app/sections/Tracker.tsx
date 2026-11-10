import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const Tracker: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          TRACKER
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React Native, Expo, TypeScript, JavaScript, Node.js, Fastify, DynamoDB, JWT, CSS3, AWS Lambda)
        </TextBox>
        <ul style={{ margin: '0 0 10px 0', paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Developed a real-time person movement monitoring application using React Native and Expo, with GPS-based location tracking.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented a custom path-smoothing algorithm to filter GPS noise, discard unrealistic position jumps, and generate stable, readable routes on the map.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed a serverless backend using AWS Lambda and DynamoDB to process and store location data in real time.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Built scalable cloud infrastructure that eliminates server management and automatically handles varying workloads.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed and implemented a custom CI/CD pipeline using free GitHub-hosted runners to build React Native code into Android APK and AAB release packages for Google Play distribution, eliminating the need for a dedicated build service and saving approximately $6,000 per year.',
              )}
            </Typography>
          </li>
        </ul>

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
