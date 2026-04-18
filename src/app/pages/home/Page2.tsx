import { PaperA4 } from '@app/paperA4/PaperA4';
import { Blog } from '@app/sections/Blog';
import { DesignSystem } from '@app/sections/DesignSystem';
import { EuropaUbezpieczenia } from '@app/sections/EuropaUbezpieczenia';
import { FiguresWithBBox } from '@app/sections/FiguresWithBBox';
import { Header } from '@app/sections/header/Header';
import { Leetcode } from '@app/sections/leetcode/Leetcode';
import { Tracker } from '@app/sections/Tracker';
import { UserTable } from '@app/sections/UserTable';

export const Page2: React.FC = () => {
  return (
    <PaperA4>
      <EuropaUbezpieczenia />
      <Header text="Projects" />
      <FiguresWithBBox />
      <DesignSystem />
      <Tracker />
      <UserTable />
      <Leetcode />
      <Blog />
    </PaperA4>
  );
};
