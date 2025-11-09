import { PaperA4 } from '@resume/app/paperA4/PaperA4';
import { Education } from '@resume/app/sections/education/Education';
import { Intro } from '@resume/app/sections/intro/Intro';

export const Home: React.FC<{}> = () => {
  return (
    <PaperA4>
      <Intro />
      <Education />
    </PaperA4>
  );
};
