import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';

export const Education: React.FC = () => {
  return (
    <div>
      {/* Master of Science */}
      <Grid widthMax={1400} layout="flex" justifyContent="flex-start">
        <Grid widthMax={700} layout="container" margin={'4px 20px 0 0'}>
          <img src="img/pwr.png" alt="pwr logo" height={'auto'} width={'69px'} />
        </Grid>

        <Grid widthMax={700} layout="container" margin={0}>
          <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
            WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </TextBox>
          <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
            Master of Science, COMPUTER SCIENCE, Above Good (4,5)
          </TextBox>
          <TextBox color="#808080" mobileSize={13} desktopSize={13} fontWeight={500} tag="h3">
            2018.02 ‑ 2019.06, Wrocław, Poland
          </TextBox>
          <TextBox color="black" mobileSize={13} desktopSize={13} fontWeight={400} tag="h3" margin={'5px 0 0 0'}>
            <i>
              <b>Research and comparative study of relational and non-relational database systems</b>
            </i>
          </TextBox>
          <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
            (Amazon RDS, DynamoDB, AWS, Node.js)
          </TextBox>
        </Grid>
      </Grid>
      {/* Bachelor of Science */}
      <Grid widthMax={1400} layout="flex" justifyContent="flex-start" margin={'20px 0 0 0'}>
        <Grid widthMax={700} layout="container" margin={'4px 20px 0 0'}>
          <img src="img/pwr.png" alt="pwr logo" height={'auto'} width={'69px'} />
        </Grid>

        <Grid widthMax={700} layout="container" margin={0}>
          <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
            WROCŁAW UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </TextBox>
          <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
            Bachelor of Science, CONTROL ENGINEERING AND ROBOTICS, Above Good (4,5)
          </TextBox>
          <TextBox color="#808080" mobileSize={13} desktopSize={13} fontWeight={500} tag="h3">
            2014.10 ‑ 2018.01, Wrocław, Poland
          </TextBox>
          <TextBox color="black" mobileSize={13} desktopSize={13} fontWeight={400} tag="h3" margin={'5px 0 0 0'}>
            <i>
              <b>Web application supporting online booking system</b>
            </i>
          </TextBox>
          <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
            (SQL, Node.js, Express.js, JavaScript, HTML, CSS)
          </TextBox>
        </Grid>
      </Grid>
    </div>
  );
};
