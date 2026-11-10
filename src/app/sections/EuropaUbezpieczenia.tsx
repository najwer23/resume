import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { Picture } from 'najwer23morsels/lib/Picture';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const EuropaUbezpieczenia: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" alignItems="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={'69px'} widthMax={'69px'} layout="container" margin={'4px 20px 0 0'}>
        <Picture src={'img/e.jpg'} alt={'Europa Ubezpieczenia logo'} ar={1} loading="eager" />
      </Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          EUROPA UBEZPIECZENIA
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
          Full Stack Developer
        </TextBox>
        <Typography variant="caption">{T('2019.09 – 2021.10; 2 years, 2 months; Wrocław, Poland / Remote')}</Typography>
        <ul style={{ margin: 0, paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Maintained and developed an internal insurance policy management system used by insurance agents and office staff.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed and implemented new application modules to support insurance policy management and business workflows.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Integrated external payment gateways and data verification services to streamline insurance-related processes.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Worked across the full stack, developing frontend features in Angular and backend functionality in Java and Groovy.',
              )}
            </Typography>
          </li>
        </ul>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3" margin={'10px 0 0 0'}>
          (Angular, TypeScript, JavaScript, jQuery, HTML, CSS, Java (Groovy), SQL, SOAP)
        </TextBox>
      </Grid>
    </Grid>
  );
};
