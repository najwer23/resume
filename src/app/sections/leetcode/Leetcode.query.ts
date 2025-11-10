import { executeFetch } from "@resume/app/config/configFetch";

export const queryLeetcode = async (): Promise<any> => {
  const url = new URL(`https://leetcode-api-faisalshohag.vercel.app/najwer23`);
  return await executeFetch(url);
};
