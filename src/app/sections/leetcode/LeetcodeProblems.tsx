import { useImmediateThrottledQuery } from '@resume/app/utils/hooks/useImmediateThrottledQuery';
import { queryLeetcode } from './Leetcode.query';
import React from 'react';

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
    numberOfProblems = String(Number(result?.totalSolved));
  }

  return numberOfProblems;
});
