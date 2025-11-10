import { PaperA4 } from '@resume/paperA4/PaperA4';
import { DesignSystem } from '@resume/sections/DesignSystem';
import { EuropaUbezpieczenia } from '@resume/sections/EuropaUbezpieczenia';
import { FiguresWithBBox } from '@resume/sections/FiguresWithBBox';
import { FLHF } from '@resume/sections/FLHF';
import { Header } from '@resume/sections/header/Header';
import { Leetcode } from '@resume/sections/leetcode/Leetcode';
import { Tracker } from '@resume/sections/Tracker';

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
