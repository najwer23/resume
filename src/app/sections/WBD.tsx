import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { Picture } from 'najwer23morsels/lib/Picture';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const WBD: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" alignItems="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={'69px'} widthMax={'69px'} layout="container" margin={'4px 20px 0 0'}>
        <Picture src={'img/wbd.png'} alt={'WBD logo'} ar={1} loading="eager" />
      </Grid>

      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          WARNER BROS. DISCOVERY, TVN24.pl
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
          Frontend Software Engineer
        </TextBox>
        <Typography variant="caption">2023.08 – 2024.08; 1 year; Warsaw, Poland / Remote</Typography>

        <ul style={{ margin: '0 0 10px 0', paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Built TVN24.pl from scratch, using server-side rendering (SSR) and an islands architecture combining React microfrontends and Web Components.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed and implemented a custom SSR rendering algorithm from scratch, without relying on external rendering libraries.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Developed interactive widgets for stocks, weather, polls, elections, TV guides, and other editorial content.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Integrated independently developed components into a unified frontend architecture, enabling modular development and reuse.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Focused on performance, SEO, and user experience through server-side rendering and optimized client-side hydration.',
              )}
            </Typography>
          </li>
        </ul>

        <div>
          <Typography
            variant="link"
            href="https://tvn24.pl/"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://tvn24.pl
          </Typography>
        </div>
        <div>
          <Typography
            variant="link"
            href="https://tvn.pl/program-tv"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://tvn.pl/program-tv
          </Typography>
        </div>

        <div>
          <Typography
            variant="link"
            href="https://tvn24.pl/biznes/notowania/waluty/eurusd"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://tvn24.pl/biznes/notowania/waluty/eurusd
          </Typography>
        </div>

        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3" margin={'10px 0 0 0'}>
          (React.js, Next.js, TypeScript, JavaScript, HTML, CSS modules, Storybook, Node.js, Fastify, Google Analytics)
        </TextBox>
      </Grid>
    </Grid>
  );
};
