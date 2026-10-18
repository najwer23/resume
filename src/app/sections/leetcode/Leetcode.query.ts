import { executeFetchExternal } from '@app/config/configFetch';

export interface LeetcodeResponse {
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

export const queryLeetcode = (): Promise<LeetcodeResponse> => {
  const endpointUrl = new URL('https://leetcode-api-faisalshohag.vercel.app/najwer23');
  return executeFetchExternal<LeetcodeResponse>(endpointUrl);
};
