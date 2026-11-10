import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Navigation } from '@app/navigation/Navigation';
import { PageA4 } from '@app/PageA4/PageA4';
import { API } from '@app/sections/API';
import { AppliedSystems } from '@app/sections/AppliedSystems';
import { Blog } from '@app/sections/Blog';
import { Caregiving } from '@app/sections/Caregiving';
import { DesignSystem } from '@app/sections/DesignSystem';
import { Education } from '@app/sections/Education';
import { EuropaUbezpieczenia } from '@app/sections/EuropaUbezpieczenia';
import { FiguresWithBBox } from '@app/sections/FiguresWithBBox';
import { FLHF } from '@app/sections/FLHF';
import { Header } from '@app/sections/header/Header';
import { Intro } from '@app/sections/intro/Intro';
import { Leetcode } from '@app/sections/leetcode/Leetcode';
import { Najwer23lang } from '@app/sections/Najwer23lang';
import { NestNext } from '@app/sections/NestNext';
import { Nook } from '@app/sections/Nook';
import { Summary } from '@app/sections/Summary';
import { Tracker } from '@app/sections/Tracker';
import { UserTable } from '@app/sections/UserTable';
import { WBD } from '@app/sections/WBD';
import { Grid } from 'najwer23morsels/lib/Grid';

export const Home: React.FC<{}> = () => {
  useDocumentTitle('Mariusz Najwer - Résumé EN');

  return (
    <Grid layout="container" margin={'0 0 50px 0'}>
      <PageA4 toolbar={<Navigation />}>
        <Intro />
        <Header text="Summary" />
        <Summary />
        {/* ------ */}
        <Header text="Education" />
        <Education />
        {/* ------ */}
        <Header text="Professional Experience" />
        <Caregiving />
        <AppliedSystems />
        <WBD />
        <FLHF />
        <EuropaUbezpieczenia />
        {/* ------ */}
        <Header text="Projects" />

        <DesignSystem />
        <Najwer23lang />
        <Tracker />
        <Nook />
        <API />

        <UserTable />
        <Blog />
        <NestNext />

        <Leetcode />
        <FiguresWithBBox />
      </PageA4>
    </Grid>
  );
};
