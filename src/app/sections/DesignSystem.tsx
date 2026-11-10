import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const DesignSystem: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          DESIGN SYSTEM (npm package)
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React.js, TypeScript, JavaScript, CSS Modules, Storybook, Vite, Rollup.js, Biome.js)
        </TextBox>
        <ul style={{ margin: '0 0 10px 0', paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed and developed a reusable React component library, built around consistent design tokens and a flexible theming system.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented a recursive algorithm to transform nested design tokens into CSS variables, enabling scalable theme generation and consistent styling across components.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Developed reusable components covering layout, typography, form controls, dialogs, and data display.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Built accessible components with predictable APIs, configurable through CSS variables and designed for performance and maintainability.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Documented and tested components visually using Storybook, supporting consistent development and easier integration.',
              )}
            </Typography>
          </li>
        </ul>

        <div>
          <Typography
            variant="link"
            href="https://www.npmjs.com/package/najwer23morsels"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://www.npmjs.com/package/najwer23morsels
          </Typography>
        </div>
        <div>
          <Typography
            variant="link"
            href="https://najwer23.github.io/najwer23morsels"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://najwer23.github.io/najwer23morsels
          </Typography>
        </div>
        <div>
          <Typography
            variant="link"
            href="https://github.com/najwer23/najwer23morsels"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/najwer23/najwer23morsels
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
