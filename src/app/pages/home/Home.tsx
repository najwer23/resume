import { Navigation } from '@resume/navigation/Navigation';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Navigation />
      <Page1 />
      <Page2 />
    </>
  );
};
