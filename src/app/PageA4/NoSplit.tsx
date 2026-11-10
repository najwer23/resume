import type { HTMLAttributes } from 'react';

export const NoSplit = ({ children, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div data-no-split="" {...rest}>
      {children}
    </div>
  );
};
