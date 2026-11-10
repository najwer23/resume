import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { Picture } from 'najwer23morsels/lib/Picture';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const AppliedSystems: React.FC<{}> = ({}) => {
  const T = useT();
  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" alignItems="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={'69px'} widthMax={'69px'} layout="container" margin={'4px 20px 0 0'}>
        <Picture src={'img/applied.jpg'} alt={'Applied Systems logo'} ar={1} loading="eager" />
      </Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          APPLIED SYSTEMS INC.
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
          Frontend-leaning Software Engineer
        </TextBox>
        <Typography variant="caption">
          {T('2024.06 – 2025.10; 1 year, 5 months; Austin, United States / Remote')}
        </Typography>

        <ul style={{ margin: 0, paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Built a server-driven UI for the insurance purchase flow from scratch: a recursive DFS renderer that turns a deeply nested question graph from backend JSON into a working form.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Delivered it first in Angular, then rewrote it in React to adopt the company’s new design system.')}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Kept the form smooth and responsive at that depth by optimizing rendering performance.')}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Took ownership of the end-to-end Playwright tests originally written by QA, maintaining and extending them as the flow changed.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Raised code quality with code reviews, using AI-assisted review to catch issues earlier.')}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Contributed to the admin panel, user tracking, statistical charts, and WCAG 2.1 AA compliance in an 8-person international team.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Onboarded new developers to the question graph and documented solutions the team reused.')}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Participated in discussions with managers and stakeholders, contributing technical insights and helping shape key decisions about the insurance purchase flow and its user experience.',
              )}
            </Typography>
          </li>
        </ul>

        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3" margin={'10px 0 0 0'}>
          (React.js, TypeScript, JavaScript, Angular, HTML, CSS modules, Storybook, Pendo, Sentry)
        </TextBox>
      </Grid>
    </Grid>
  );
};
