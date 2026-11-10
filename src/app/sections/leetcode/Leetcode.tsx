import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import type React from 'react';
import { LeetcodeProblems } from './LeetcodeProblems';

export const Leetcode: React.FC = () => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          LEETCODE
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (Node.js, JavaScript)
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 5px 0'}>
          {T('Leetcode_Description')} <LeetcodeProblems />
        </TextBox>
        <Typography
          variant="link"
          href="https://leetcode.com/najwer23/"
          mobileSize={14}
          desktopSize={14}
          rel="noreferrer"
          target="_blank"
        >
          https://leetcode.com/najwer23
        </Typography>
      </Grid>
    </Grid>
  );
};
