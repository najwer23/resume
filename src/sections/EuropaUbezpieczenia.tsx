import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { T } from '../translation/T';

export const EuropaUbezpieczenia: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={1400} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={70} layout="container" margin={'4px 20px 0 0'}>
        <img src="img/e.jpg" alt="europa ubezpieczenia logo" height={'auto'} width={'69px'} />
      </Grid>

      <Grid widthMax={700} layout="container" margin={0}>
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
