import { PaperA4 } from '@resume/paperA4/PaperA4';
import { AppliedSystems } from '@resume/sections/AppliedSystems';
import { Education } from '@resume/sections/Education';
import { Header } from '@resume/sections/header/Header';
import { Intro } from '@resume/sections/intro/Intro';
import { WBD } from '@resume/sections/WBD';

export const Page1: React.FC<{}> = () => {
  return (
    <PaperA4>
      <Intro />
      <Header text="Education" />
      <Education />
      <Header text="Professional Experience" />
      <AppliedSystems />
      <WBD />
    </PaperA4>
  );
};
