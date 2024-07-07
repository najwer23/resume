import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { T } from '../translation/T';
import { SectionTitle, SectionTitleLine, SkillsWrapper, SkillsWrapperChild } from './ResumeSection.styled';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const arrSkills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Angular',
  'jQuery',
  'Next.js',
  'Redux.js',
  'Recoil.js',
  'MobX.js',
  'Knokout.js',
  'Cypress',
  'Jtest.js',
  'Puppeteer',
  'HTML5',
  'CSS (Less, Sass, CSS-IN-JS, modules)',
  'Tailwind CSS',
  'PHP',
  'Node.js',
  'Storybook',
  'Design system',
  'AWS (DynamoDB, S3, RDS, E3)',
  'XML, JSON, GraphQL',
  'Express.js',
  'Agile, Scrum & JIRA',
  'Web Components',
  'Leaflet',
  'Core Web Vitals',
  'SQL',
  'Search Engine Optimization(SEO)',
  'a11y',
  'SSR',
  'Fastify',
];

export const Skills = () => {
  return (
    <>
      <SectionTitle>{T('SKILLS')}</SectionTitle>
      <SectionTitleLine />
      <SkillsWrapper>
        {arrSkills.map((_, i, arr) => (
          <SkillsWrapperChild key={i}>
            <div>{arr[i]}</div>
            <div>
              {i < arr.length - 1 ? (
                <FontAwesomeIcon icon={faCircle} size="2xs" style={{ color: 'orangered', marginLeft: '10px' }} />
              ) : (
                ''
              )}
            </div>
          </SkillsWrapperChild>
        ))}
      </SkillsWrapper>
    </>
  );
};
