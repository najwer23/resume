import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';

export const AppliedSystems: React.FC<{}> = ({}) => {
  return (
      <Grid widthMax={1400} layout="flex" justifyContent="flex-start">
        <Grid widthMin={70} layout="container" margin={'4px 20px 0 0'}>
          <img src="img/applied.jpg" alt="applied systems logo" height={'auto'} width={'69px'} />
        </Grid>

        <Grid widthMax={700} layout="container" margin={0}>
          <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
            APPLIED SYSTEMS INC.
          </TextBox>
          <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="h3">
            Frontend Software Engineer
          </TextBox>
          <TextBox color="grey" mobileSize={13} desktopSize={13} fontWeight={200} tag="h3">
            2024.06 – 2025.10; 1 year, 5 months; Austin, United States / Remote
          </TextBox>

          <TextBox color="black" mobileSize={14} desktopSize={14} fontWeight={400} tag="p" margin={'10px 0 0 0'}>
            Moim obowiązkiem było stworzenie aplikacji frontendowej, która pozwoli na zakup ubezpieczenia przez stronę
            internetową. Aplikacja została zbudowana z wykorzystaniem React.js, TypeScript oraz design systemu firmy
            Applied Systems. Głównym problemem było opracowanie algorytmu, który pozwoli warunkowo wyrenderować pytania
            mające zagnieżdżoną strukturę, przypominającą graf (pytania były zależne od innych pytań). Został tutaj
            użyty rekurencyjny algorytm DFS. Same pytania były pobierane z backendu w formacie JSON (60 tys. linii kodu)
            struktura JSONa przypominała ideę Server Driven UI. Zespół składał się z 15 osób i był międzynarodowy
            (Polska, Indie, Kanada, Anglia, USA, Australia). Dodatkowo został wdrożony panel administratora, skrypty
            śledzące akcje użytkownika, wykresy ze statystyką oraz wsparcie dla WCAG 2.1 AA.
          </TextBox>

          <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={200} tag="h3" margin={'10px 0 0 0'}>
            (React.js, TypeScript, JavaScript, HTML, CSS modules, Storybook, Pendo, Sentry, Angular)
          </TextBox>
        </Grid>
      </Grid>
  )
};
