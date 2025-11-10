import { PaperA4 } from '@resume/app/paperA4/PaperA4';
import { AppliedSystems } from '@resume/app/sections/AppliedSystems';
import { Education } from '@resume/app/sections/Education';
import { Header } from '@resume/app/sections/header/Header';
import { Intro } from '@resume/app/sections/intro/Intro';
import { WBD } from '@resume/app/sections/WBD';

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
