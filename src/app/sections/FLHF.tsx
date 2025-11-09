import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';

export const FLHF: React.FC<{}> = ({}) => {
  return (
    <Grid widthMax={1400} layout="flex" justifyContent="flex-start">
      <Grid widthMin={70} layout="container" margin={'4px 20px 0 0'}>
        <img src="img/flhf.png" alt="applied systems logo" height={'auto'} width={'69px'} />
      </Grid>

      <Grid widthMax={700} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          FLHF S.A
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
          FRONTEND WEB DEVELOPER
        </TextBox>
        <TextBox color="grey" mobileSize={13} desktopSize={13} fontWeight={200} tag="h3">
          2021.11 – 2023.04; 1 year, 6 months; Wrocław, Poland / Remote
        </TextBox>
        <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 0 0'}>
          Moim obowiązkiem było poprawienie strony internetowej, która została stworzona przez software house, oraz
          jednoczesne odświeżenie szaty graficznej. Głównym zadaniem było stworzenie komponentów charakterystycznych dla
          e-commerce, takich jak slidery, karuzele, listing produktów, wyszukiwarka oraz koszyk zakupowy. Priorytetem
          były widok mobilny, SEO oraz wyniki w narzędziu Lighthouse (CLS, wydajność, dostępność).
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={200} tag="h3" margin={'10px 0 0 0'}>
          (React.js, PWA, TypeScript, JavaScript, HTML, CSS, Magento2, GraphQL)
        </TextBox>
      </Grid>
    </Grid>
  );
};
