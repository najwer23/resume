import { configApiOrigin } from '@resume/config/configApiOrigin';
import { configFetch, executeFetch, type ResponseBase } from '@resume/config/configFetch';

export const queryAnalyticsHit = async (body: Record<string, string>): Promise<ResponseBase> => {
  const url = new URL(`${configApiOrigin()}/analytics/hit`);
  const options = { ...configFetch({ method: 'POST', body: body }) };
  return await executeFetch(url, options);
};
