import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const Nook: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          NOOK
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React.js, TypeScript, Node.js, Fastify, Zustand, Design System, AWS, DynamoDB, Biome.js)
        </TextBox>
        <ul style={{ margin: '0 0 10px', paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Developed a full-stack personal productivity hub using React, TypeScript, Node.js, and Fastify, bringing multiple everyday tools together in one application.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented household bill and invoice tracking, gym workout logging, weather monitoring, stock quotes, and blog post drafting.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Built interactive charts and spending analytics to visualize financial data and track household expenses.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Developed backend services with Fastify and implemented AWS DynamoDB transactions to ensure reliable and consistent updates across household bills, invoices, and financial records.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented security measures including JWT-based authentication, Content Security Policy (CSP), CORS configuration, and CSRF protection.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Configured an automated CI/CD pipeline to build and deploy the application to GitHub Pages.')}
            </Typography>
          </li>
        </ul>

        <div>
          <Typography
            variant="link"
            href="https://najwer23.github.io/nook"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://najwer23.github.io/nook
          </Typography>
        </div>
        <div>
          <Typography
            variant="link"
            href="https://github.com/najwer23/nook"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/najwer23/nook
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
