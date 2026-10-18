import { executeFetchExternal } from '@app/config/configFetch';

export interface GithubBranchResponse {
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

export const queryGithubLastMody = (): Promise<GithubBranchResponse> => {
  const endpointUrl = new URL('https://api.github.com/repos/najwer23/resume/branches/gh-pages');

  return executeFetchExternal<GithubBranchResponse>(endpointUrl, {
    headers: { Accept: 'application/vnd.github+json' },
  });
};
