import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const Najwer23lang: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          Najwer23lang (npm package)
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (React.js, TypeScript, JavaScript, Node.js, Biome.js)
        </TextBox>
        <ul style={{ margin: '0 0 10px 0', paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed and published najwer23lang, a lightweight, zero-dependency internationalization (i18n) library for JavaScript and TypeScript projects, available on npm.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Developed a regex-based source code extraction engine that scans JavaScript, TypeScript, and React files, automatically collecting English phrases from translation function calls and generating JSON translation catalogs.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented a safe catalog synchronization algorithm that preserves existing translations, moves outdated entries into a dedicated __unused section, and restores translations when previously removed phrases are reintroduced.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Built a framework-agnostic translation core with optional React bindings, including context-based language management, hooks, dynamic language switching, and variable interpolation.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented CLI commands for project initialization, translation extraction, configurable scanning, and CI validation through a check mode that detects missing translations and outdated catalogs.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed the library to require no dependencies, Babel configuration, or additional build steps, keeping integration lightweight and straightforward for small projects.',
              )}
            </Typography>
          </li>
        </ul>

        <div>
          <Typography
            variant="link"
            href="https://github.com/najwer23/najwer23lang"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://github.com/najwer23/najwer23lang
          </Typography>
        </div>
        <div>
          <Typography
            variant="link"
            href="https://www.npmjs.com/search?q=najwer23lang"
            mobileSize={14}
            desktopSize={14}
            rel="noreferrer"
            target="_blank"
          >
            https://www.npmjs.com/search?q=najwer23lang
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
