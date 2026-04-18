import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Navigation } from '@app/navigation/Navigation';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page3 } from './Page3';

export const Home: React.FC<{}> = () => {
  useDocumentTitle('Mariusz Najwer - Résumé EN');

  return (
    <>
      <Navigation />
      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
};
