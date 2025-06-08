import { Page } from './Page.styled';

interface Props {
  children: React.ReactNode;
}

export const PageA4 = ({ children }: Props) => {
  return <Page>{children}</Page>;
};
