import { PaperA4 } from '@resume/app/paperA4/PaperA4';
import { EuropaUbezpieczenia } from '@resume/app/sections/EuropaUbezpieczenia';
import { FLHF } from '@resume/app/sections/FLHF';

export const Page2: React.FC<{}> = () => {
  return (
    <PaperA4>
      <FLHF />
      <EuropaUbezpieczenia />
    </PaperA4>
  );
};
