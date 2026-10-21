import { fetchClientExecuteExternal } from '@app/fetchClient/fetchClientExecuteExternal';

export interface QueryLeetcodeResponse {
  totalSolved: number;
  totalSubmissions: { difficulty: string; count: number; submissions: number }[];
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
  easyTotal?: number;
  mediumTotal?: number;
  hardTotal?: number;
  ranking: number;
  contributionPoint: number;
  reputation: number;
}

export const queryLeetcode = (): Promise<QueryLeetcodeResponse> => {
  const endpointUrl = new URL('https://leetcode-api-faisalshohag.vercel.app/najwer23');

  return fetchClientExecuteExternal<QueryLeetcodeResponse>(endpointUrl);
};
