import { fetchClientExecuteExternal } from '@app/fetchClient/fetchClientExecuteExternal';

export interface QueryGithubLastModyResponse {
  name: string;
  protected: boolean;
  commit: {
    sha: string;
    html_url: string;
    commit: {
      message: string;
      author: { name: string; email: string; date: string };
      committer: { name: string; email: string; date: string };
    };
  };
}

export const queryGithubLastMody = (): Promise<QueryGithubLastModyResponse> => {
  const endpointUrl = new URL('https://api.github.com/repos/najwer23/resume/branches/gh-pages');

  return fetchClientExecuteExternal<QueryGithubLastModyResponse>(endpointUrl);
};
