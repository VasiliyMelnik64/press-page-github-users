import styled from 'styled-components';
import { Header } from '../Header';
import { Loader } from '../Loader';

const MainBlock = styled.main`
  height: 100%;
  padding: 1rem 2rem;
`;

const PageLayoutContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  max-width: ${(props) => props.theme?.layout?.maxWidth};
  margin: 0 auto;
  background-color: ${(props) => props.theme?.colors?.mainBgColor};
`;

type Props = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: Props) => (
  <PageLayoutContainer data-testid='page-layout-container'>
    <Header />
    <Loader />
    <MainBlock>{children}</MainBlock>
  </PageLayoutContainer>
);
