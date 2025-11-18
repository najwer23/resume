import { useImmediateThrottledQuery } from '@resume/hooks/useImmediateThrottledQuery';
import React from 'react';
import { queryLeetcode } from './Leetcode.query';

export const LeetcodeProblems: React.FC = React.memo(() => {
  const { result, isLoading } = useImmediateThrottledQuery({
    queryKey: ['queryLeetcode', 'queryLeetcode resume'],
    queryFn: () => queryLeetcode(),
    staleTime: 30 * 1000 * 60,
    gcTime: 30 * 1000 * 60,
    retry: 0,
    enabled: true,
  });

  let numberOfProblems: string = '1620+';

  if (!isLoading) {
    numberOfProblems = String(Number(result?.totalSolved) || numberOfProblems);
  }

  return numberOfProblems;
});
