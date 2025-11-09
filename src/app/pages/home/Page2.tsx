import { PaperA4 } from '@resume/app/paperA4/PaperA4';
import { DesignSystem } from '@resume/app/sections/DesignSystem';
import { EuropaUbezpieczenia } from '@resume/app/sections/EuropaUbezpieczenia';
import { FiguresWithBBox } from '@resume/app/sections/FiguresWithBBox';
import { FLHF } from '@resume/app/sections/FLHF';
import { Header } from '@resume/app/sections/header/Header';
import { Leetcode } from '@resume/app/sections/Leetcode';
import { Tracker } from '@resume/app/sections/Tracker';

export const Page2: React.FC<{}> = () => {
  return (
    <PaperA4>
      <FLHF />
      <EuropaUbezpieczenia />
      <Header text="Projects" />
      <FiguresWithBBox />
      <DesignSystem />
      <Tracker /> 
      <Leetcode   />
    </PaperA4>
  );
};
