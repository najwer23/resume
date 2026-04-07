import { executeFetch } from '../config/configFetch';

export const queryGithubLastMody = async (): Promise<any> => {
  const url = new URL(`https://api.github.com/repos/najwer23/resume/branches/gh-pages`);
  return await executeFetch(url);
};
