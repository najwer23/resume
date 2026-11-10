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
            'Frontend-leaning Full-Stack Software Engineer specializing in React, Angular, TypeScript, and Node.js. Experienced in designing complex server-driven interfaces, custom rendering architectures, reusable design systems, and serverless backend solutions on AWS. Strong focus on performance, algorithmic problem-solving, Core Web Vitals, accessibility, and maintainable software architecture.',
          )}
        </Typography>
      </Grid>
    </Grid>
  );
};
