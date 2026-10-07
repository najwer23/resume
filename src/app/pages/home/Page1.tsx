import { PaperA4 } from '@app/paperA4/PaperA4';
import { AppliedSystems } from '@app/sections/AppliedSystems';
import { Caregiving } from '@app/sections/Caregiving';
import { Education } from '@app/sections/Education';
import { Header } from '@app/sections/header/Header';
import { Intro } from '@app/sections/intro/Intro';
import { WBD } from '@app/sections/WBD';

export const Page1: React.FC<{}> = () => {
  return (
    <PaperA4>
      <Intro />
      <Header text="Education" />
      <Education />
      <Header text="Professional Experience" />
      <Caregiving />
      <AppliedSystems />
      <WBD />
    </PaperA4>
  );
};
