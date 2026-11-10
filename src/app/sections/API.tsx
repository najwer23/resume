import { useT } from 'najwer23lang/react';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';

export const API: React.FC<{}> = ({}) => {
  const T = useT();

  return (
    <Grid widthMax={'1400px'} layout="flex" justifyContent="flex-start" margin={'15px 0 0 0'}>
      <Grid widthMax={'700px'} layout="container" margin={0}>
        <TextBox color="black" mobileSize={18} desktopSize={18} fontWeight={500} tag="h3">
          REST API - Fastify + AWS Lambda
        </TextBox>
        <TextBox color="black" mobileSize={12} desktopSize={12} fontWeight={400} tag="h3">
          (Node.js, TypeScript, Fastify, AWS Lambda, DynamoDB, S3, OpenAPI, Swagger, JWT, DDD, HMAC, CORS, CSRF,
          Biome.js)
        </TextBox>
        <ul style={{ margin: '0', paddingLeft: '16px' }}>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Designed and developed a serverless REST API using Node.js, TypeScript, Fastify, and AWS Lambda, applying Domain-Driven Design (DDD) principles to create a modular architecture with clearly separated business domains and responsibilities.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Built API integrations for a personal blog, blog post creator, portfolio, weather application, NASA Astronomy Picture of the Day (APOD), analytics, and fitness tracking.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented JWT-based authentication with access and refresh tokens, HMAC-based request signing, token renewal, and session management to secure API access across connected applications.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T('Integrated AWS DynamoDB and S3 for persistent data storage and file management.')}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Implemented security measures including Content Security Policy (CSP), CORS configuration, and Cross-Site Request Forgery (CSRF) protection.',
              )}
            </Typography>
          </li>
          <li>
            <Typography variant="body" mobileSize={14} desktopSize={14}>
              {T(
                'Developed email delivery services and documented API endpoints using OpenAPI and Swagger for easier integration and maintenance.',
              )}
            </Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};
