import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import type React from 'react';
import { T } from '../../translation/T';
import { LeetcodeProblems } from './LeetcodeProblems';

export const Leetcode: React.FC = () => {
  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMin={'70px'} layout="container" margin={'4px 20px 0 0'}></Grid>

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
        <TextBox
          href="https://leetcode.com/najwer23/"
          mobileSize={14}
          desktopSize={14}
          color="orangered"
          colorHover="orangered"
          rel="noreferrer"
          target="_blank"
        >
          https://leetcode.com/najwer23
        </TextBox>
      </Grid>
    </Grid>
  );
};
