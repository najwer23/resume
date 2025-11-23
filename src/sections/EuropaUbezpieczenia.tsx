import { Grid } from 'najwer23morsels/lib/grid';
import { Picture } from 'najwer23morsels/lib/picture';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { T } from '../translation/T';

export const EuropaUbezpieczenia: React.FC<{}> = ({}) => {
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
        <TextBox color="#808080" mobileSize={13} desktopSize={13} fontWeight={500} tag="h3">
          2019.09 – 2021.10; 2 years, 2 months; Wrocław, Poland / Remote
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 0 0'}>
          {T('EuropaUbezpieczenia_Description')}
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3" margin={'10px 0 0 0'}>
          (Angular, TypeScript, JavaScript, jQuery, HTML, CSS, Java (Groovy), SQL, SOAP)
        </TextBox>
      </Grid>
    </Grid>
  );
};
