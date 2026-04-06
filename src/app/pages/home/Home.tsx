import { useImmediateThrottledQuery } from '@resume/hooks/useImmediateThrottledQuery';
import { Navigation } from '@resume/navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { queryAnalyticsHit } from '../analytics/Analytics.query';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

export const Home: React.FC<{}> = () => {
  const location = useLocation();
  const currentUrl = window.location.href.toLowerCase();

  useImmediateThrottledQuery(
    {
      queryKey: ['useDocumentTitleResume', 'useDocumentTitleResume' + location.pathname],
      queryFn: () => queryAnalyticsHit({ appName: import.meta.env.VITE_ANALYTICS_APP_NAME, pageName: '/resume' }),
      staleTime: Infinity,
      gcTime: Infinity,
      retry: 0,
      enabled: true, // !currentUrl.includes('localhost'),
    },
    0,
  );

  return (
    <>
      <Navigation />
      <Page1 />
      <Page2 />
    </>
  );
};
