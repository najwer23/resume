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
                'Built a server-driven UI for the insurance purchase flow from scratch: a recursive DFS renderer that turns an unusually large, deeply nested question graph from backend JSON into a working form.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Shipped it in Angular, then rewrote it in React to adopt the company’s new design system.')}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Reduced loading from 14s to 3s by profiling with React DevTools and fixing the slowest re-render paths (memoization, state splitting, caching the DFS).',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Fixed broken question logic and contributed to the admin panel, user tracking and statistical charts in an 8-person international team.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Pushed for accessible CSS tokens (WCAG 2.1 AA) and consistent form structure on every page, and proposed UX improvements to managers and stakeholders.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Raised code quality with linters, CI/CD checks and code reviews (including AI-assisted), and took over the end-to-end Playwright tests from QA.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Onboarded new developers to the question graph and documented solutions the team reused.')}
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
