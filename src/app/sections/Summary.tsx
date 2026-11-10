import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';

import { Typography } from 'najwer23morsels/lib/Typography';

export const Summary: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" alignItems="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMax={'700px'} layout="container" margin={0}>
        <Typography variant="body" mobileSize={14} desktopSize={14} margin={0}>
          {T(
            'Frontend-leaning full-stack engineer (React, Angular, TypeScript, Node.js) who builds the hard parts of a product: a server-driven UI that renders an insurance purchase flow from backend data, a news portal built from scratch with a custom SSR algorithm (widget load time cut from 14 seconds to near-instant), and serverless backends on AWS Lambda and DynamoDB. Focused on performance (Core Web Vitals), accessibility (WCAG), and maintainable architecture.',
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};
