import { PaperA4 } from '@app/paperA4/PaperA4';
import { DesignSystem } from '@app/sections/DesignSystem';
import { EuropaUbezpieczenia } from '@app/sections/EuropaUbezpieczenia';
import { FiguresWithBBox } from '@app/sections/FiguresWithBBox';
import { FLHF } from '@app/sections/FLHF';
import { Header } from '@app/sections/header/Header';
import { Leetcode } from '@app/sections/leetcode/Leetcode';
import { Tracker } from '@app/sections/Tracker';

export const Page2: React.FC = () => {
  return (
    <PaperA4>
      <FLHF />
      <EuropaUbezpieczenia />
      <Header text="Projects" />
      <FiguresWithBBox />
      <DesignSystem />
      <Tracker />
      <Leetcode />
    </PaperA4>
  );
};
