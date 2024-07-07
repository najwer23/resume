import { Nav } from '../nav/Nav';
import { PageA4 } from '../pageA4/PageA4';
import { Education } from '../resumeSection/Education';
import { Exp } from '../resumeSection/Exp';
import { Intro } from '../resumeSection/Intro';
import { Project } from '../resumeSection/Project';
import { Skills } from '../resumeSection/Skills';

export const Home = () => {
  return (
    <>
      <Nav />
      <PageA4>
        <Intro />
        <Education />
        <Exp title number={5} />
        <Exp number={4} />
      </PageA4>
      <PageA4>
        <Exp number={3} />
        <Exp number={2} />
        <Exp number={1} />
        <br />
        <Skills />
      </PageA4>
      <PageA4>
        <Project title2 number={1} />
        <Project number={2} />
        <Project number={4} />

        <Project number={3} />
        <Project number={6} />
        <Project number={11} />
      </PageA4>
      <PageA4>
        {/* <Project number={7} /> */}
        {/* <Project number={5} /> */}
        {/* <Project number={8} /> */}
        <Project number={10} />
        {/* <Project number={9} /> */}
        <Project number={12} />
        <Project number={14} />
        <Project number={13} />
      </PageA4>
    </>
  );
};
