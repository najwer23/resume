import { Page } from './Page.styled';

interface Props {
  children: React.ReactNode;
}

export const PageA4 = ({ children }: Props): JSX.Element => {
  return <Page>{children}</Page>;
};
