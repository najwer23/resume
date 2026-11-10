import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Navigation } from '@app/navigation/Navigation';
import PageA4 from '@app/paperA4/PageA4';
import { AppliedSystems } from '@app/sections/AppliedSystems';
import { Caregiving } from '@app/sections/Caregiving';
import { Education } from '@app/sections/Education';
import { Header } from '@app/sections/header/Header';
import { Intro } from '@app/sections/intro/Intro';
import { WBD } from '@app/sections/WBD';

export const Home: React.FC<{}> = () => {
  useDocumentTitle('Mariusz Najwer - Résumé EN');

  return (
    <>
      <Navigation />
      <PageA4>
        <Intro />
        <Header text="Education" />
        <Education />
        <Header text="Professional Experience" />
        <Caregiving />
        <AppliedSystems />
        <WBD />
      </PageA4>
    </>
  );
};
