import {
  IntroLink,
  IntroLinks,
  IntroTitle,
  IntroTitleDesc,
  IntroTitleName,
  SectionIntro,
} from './ResumeSection.styled';

const Links: {
  [key: string]: string | React.ReactNode;
} = {
  'tel:+48571024300': (
    <>
      +48{'\u00A0'}571{'\u00A0'}024{'\u00A0'}300
    </>
  ),
  'mailto:najwer23@live.com': 'najwer23@live.com',
  'https://najwer23.github.io': 'https://najwer23.github.io',
  'https://www.linkedin.com/in/najwer23': <b>https://www.linkedin.com/in/najwer23</b>,
};

export const Intro = () => {
  return (
    <>
      <SectionIntro>
        <IntroTitle>
          <IntroTitleName>
            <b>Mariusz</b> Najwer
          </IntroTitleName>
          <IntroTitleDesc>
            <b>Frontend Software Engineer</b>
          </IntroTitleDesc>
        </IntroTitle>
        <IntroLinks>
          {Object.keys(Links).map((v, i) => (
            <IntroLink key={i}>
              <a key={i} href={v} rel="noreferrer" target="_blank">
                {Links[v]}
              </a>
            </IntroLink>
          ))}
        </IntroLinks>
      </SectionIntro>
    </>
  );
};
