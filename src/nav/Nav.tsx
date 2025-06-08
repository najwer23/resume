import { BoxMody, NavContainer, NavUtils } from './Nav.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { useTranslationContext } from '../translation/useTranslationContext';
import { GithubLastMody } from '../github/GithubLastMody';
import { Button } from 'najwer23snacks/lib/Button';

export const Nav = () => {
  const { lang, setLang } = useTranslationContext();

  const printPDF = () => {
    window.print();
  };

  return (
    <NavContainer>
      <BoxMody>
        <GithubLastMody repoName="resume" />
      </BoxMody>
      <NavUtils>
        <Button type={'button'} aria-label={'lang En'} onClick={() => setLang('en')} disabled={lang === 'en'}>
          EN
        </Button>
        <Button type={'button'} aria-label={'lang Pl'} onClick={() => setLang('pl')} disabled={lang === 'pl'}>
          PL
        </Button>
        <Button type={'button'} aria-label={'lang En'} onClick={() => printPDF()}>
          <FontAwesomeIcon icon={faFilePdf} size="xl" style={{ color: 'white' }} />
        </Button>
      </NavUtils>
    </NavContainer>
  );
};
