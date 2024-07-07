import { T } from '../translation/T';
import {
  Section,
  Section2Col,
  Section2ColDesc,
  Section2ColDescDesc,
  Section2ColDescDescInner,
  Section2ColDescDescInnerStory,
  Section2ColDescDescInnerTech,
  Section2ColDescTitle,
  Section2ColLogo,
  SectionInner,
  SectionTitle,
  SectionTitleLine,
} from './ResumeSection.styled';

const ExpTitle = () => {
  return (
    <>
      <SectionTitle>{T('EXPERIENCE')}</SectionTitle>
      <SectionTitleLine />
    </>
  );
};

const Exp5 = () => {
  return (
    <SectionInner>
      <Section2Col>
        <Section2ColLogo>
          <img src="img/applied.jpg" alt="applied systems logo" />
        </Section2ColLogo>
        <Section2ColDesc>
          <Section2ColDescTitle>{T('APPLIED SYSTEMS - FRONTEND SOFTWARE ENGINEER')}</Section2ColDescTitle>
          <Section2ColDescDesc>
            <Section2ColDescDescInner>{T('2024.06.05 – current')}</Section2ColDescDescInner>
            <Section2ColDescDescInnerStory>
              <ul>
                <li>{T('Client from the insurance industry (~250 000 users)')}</li>
                <li>{T('Leading the team through frontend transformation (Angular -> React.js)')}</li>
                <li>{T('Leveraging AI-powered design and development')}</li>
                <li>
                  {T('Implementing effective communication strategies and promoting a culture of continuous learning')}
                </li>
                <li>{T('Best practices in software testing')}</li>
                <li>{T('Creating complex forms to handle insurance applications')}</li>
                <li>{T('a11y')}</li>
              </ul>
            </Section2ColDescDescInnerStory>
            <Section2ColDescDescInnerTech>
              (React.js, Angular, TypeScript, JavaScript, HTML5, CSS3, Storybooks, Vite)
            </Section2ColDescDescInnerTech>
          </Section2ColDescDesc>
        </Section2ColDesc>
      </Section2Col>
    </SectionInner>
  );
};

const Exp4 = () => {
  return (
    <SectionInner>
      <Section2Col>
        <Section2ColLogo>
          <img src="img/wbd.png" alt="Warner Bros logo" />
        </Section2ColLogo>
        <Section2ColDesc>
          <Section2ColDescTitle>{T('WARNER BROS - FRONTEND SOFTWARE ENGINEER')}</Section2ColDescTitle>
          <Section2ColDescDesc>
            <Section2ColDescDescInner>{T('2023.08.07 – current')}</Section2ColDescDescInner>
            <Section2ColDescDescInnerStory>
              <ul>
                <li>{T('Client from the entertainment industry (~100 000 000 users)')} </li>
                <li>{T('Micro-frontend architecture')} </li>
                <li>{T('Creating SSR components')} </li>
                <li>{T('Impact on design system')} </li>
                <li>{T('Improving website performance')} </li>
                <li>{T('Cooperation with the testing team')} </li>
                <li>{T('a11y')} </li>
              </ul>
            </Section2ColDescDescInnerStory>
            <Section2ColDescDescInnerTech>
              (JavaScript, TypeScript, Web Components, React.js, Next.js, Redux.js, CSS3, CSS Modules, HTML, Node.js,
              REST APIs, JSON, GraphQL, Search Engine Optimization (SEO), Scrum, JIRA, Core Web Vitals, Figma, Astro,
              Stroybook, Vite)
            </Section2ColDescDescInnerTech>
          </Section2ColDescDesc>
        </Section2ColDesc>
      </Section2Col>
    </SectionInner>
  );
};

const Exp3 = () => {
  return (
    <SectionInner>
      <Section2Col>
        <Section2ColLogo>
          <img src="img/flhf.png" alt="flhf logo" />
        </Section2ColLogo>
        <Section2ColDesc>
          <Section2ColDescTitle>{T('FLHF S.A - FRONTEND WEB DEVELOPER')}</Section2ColDescTitle>
          <Section2ColDescDesc>
            <Section2ColDescDescInner>{T('2021.11.01 – 2023.04.30; 1 year, 6 months')}</Section2ColDescDescInner>
            <Section2ColDescDescInnerStory>
              <ul>
                <li>{T('Client from the ecommerce industry (Income: ~4 000 000 PLN)')} </li>
                <li>
                  {T(
                    'Creating and changing functionality on the website (Store search engine, Blog page, Shopping cart, Checkout, Sliders, Carousel, Filters etc.)',
                  )}
                </li>
                <li>{T('Improving website performance')}</li>
                <li>{T('Collaboration with the devops team')}</li>
                <li>{T('Email templates')}</li>
                <li>{T('a11y')}</li>
              </ul>
            </Section2ColDescDescInnerStory>
            <Section2ColDescDescInnerTech>
              (JavaScript, jQuery, React.js, TypeScript, HTML5, CSS3, JSON, GraphQL, Search Engine Optimization (SEO),
              Core Web Vitals, Magento2, Scrum, JIRA)
            </Section2ColDescDescInnerTech>
          </Section2ColDescDesc>
        </Section2ColDesc>
      </Section2Col>
    </SectionInner>
  );
};

const Exp2 = () => {
  return (
    <SectionInner>
      <Section2Col>
        <Section2ColLogo>
          <img src="img/e.jpg" alt="europa logo" />
        </Section2ColLogo>
        <Section2ColDesc>
          <Section2ColDescTitle>{T('EUROPA UBEZPIECZENIA - FULL STACK DEVELOPER')}</Section2ColDescTitle>
          <Section2ColDescDesc>
            <Section2ColDescDescInner>{T('2019.09.01 – 2021.10.31; 2 years, 2 months')}</Section2ColDescDescInner>
            <Section2ColDescDescInnerStory>
              <ul>
                <li>{T('Client from the insurance industry (Income: ~5 000 000 PLN)')}</li>
                <li>{T('Creating expert systems enabling the purchase of insurance')}</li>
                <li>{T('Creating complex forms to handle insurance applications')}</li>
                <li>{T('Cooperation with business analysts')}</li>
                <li>{T('Email templates')}</li>
                <li>{T('Creating complex SQL queries for data aggregation')}</li>
                <li>{T('Creating database models for web applications')}</li>
              </ul>
            </Section2ColDescDescInnerStory>
            <Section2ColDescDescInnerTech>
              (Angular, Angular.js, TypeScript, JavaScript, jQuery, HTML5, CSS3, Groovy, PHP, SQL, JSON, Scrum, JIRA)
            </Section2ColDescDescInnerTech>
          </Section2ColDescDesc>
        </Section2ColDesc>
      </Section2Col>
    </SectionInner>
  );
};

const Exp1 = () => {
  return (
    <SectionInner>
      <Section2Col>
        <Section2ColLogo>
          <img src="img/o.png" alt="orange logo" />
        </Section2ColLogo>
        <Section2ColDesc>
          <Section2ColDescTitle>{T('Orange - INTERN')}</Section2ColDescTitle>
          <Section2ColDescDesc>
            <Section2ColDescDescInner>{T('2017.07; 1 month')}</Section2ColDescDescInner>
          </Section2ColDescDesc>
        </Section2ColDesc>
      </Section2Col>
    </SectionInner>
  );
};

interface ExpProps {
  title?: boolean;
  number?: number;
}

export const Exp = ({ title, number }: ExpProps) => {
  let obj: {
    [key: string | number]: string | React.ReactNode;
  } = {
    1: <Exp1 />,
    2: <Exp2 />,
    3: <Exp3 />,
    4: <Exp4 />,
    5: <Exp5 />,
  };

  return (
    <Section>
      {title && <ExpTitle />}
      {obj[number ?? 1]}
    </Section>
  );
};
