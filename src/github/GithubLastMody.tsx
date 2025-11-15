import { Grid } from 'najwer23morsels/lib/grid';
import { Loader } from 'najwer23morsels/lib/loader';
import { TextBox } from 'najwer23morsels/lib/textbox';
import React from 'react';
import { useImmediateThrottledQuery } from '../hooks/useImmediateThrottledQuery';
import { queryGithubLastMody } from './GithubLastMody.query';

export const GithubLastMody: React.FC<{}> = React.memo(() => {
  const { result, isLoading } = useImmediateThrottledQuery({
    queryKey: ['queryGithubLastMody', 'queryGithubLastMody resume'],
    queryFn: () => queryGithubLastMody(),
    staleTime: 30 * 1000 * 60,
    gcTime: 30 * 1000 * 60,
    retry: 0,
    enabled: true,
  });

  return (
    <Grid widthMin={'160px'} layout="flex">
      {isLoading && <Loader loaderColor="black" minHeight={'50px'} />}
      {!isLoading && (
        <TextBox mobileSize={20} desktopSize={20} margin={0}>
          {new Date(result.commit.commit.committer.date).toLocaleString('pl-PL', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            year: 'numeric',
          })}
        </TextBox>
      )}
    </Grid>
  );
});
