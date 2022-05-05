import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Graphik Web,sans-serif;
    transition: all 0.15s linear;
  }

  html, body, #root {
    height: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  background-color: ${(props) => props.theme?.colors?.primary};
  padding: 1rem 2rem;
`;

export const HeadTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 300;
  line-height: 1.25;
  color: ${(props) => props.theme?.colors?.primary};
  letter-spacing: -0.02em;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const HeadSubTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: ${(props) => props.theme?.colors?.secondary};
`;
