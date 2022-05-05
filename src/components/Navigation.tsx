import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { FormattedText } from './formatting/FormattedText';

import { routes } from '../routes';

const Link = styled(NavLink)`
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  transition: opacity 0.15s linear;
  margin-right: 2rem;
  color: ${(props) => props.theme?.colors?.navigation};
  text-decoration: none;
  line-height: 1rem;
  font-weight: 400;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-left: 2rem;
  }
`;

export const StyledNavigation = styled.nav`
  flex: 1 1 50%;
  display: flex;
  align-items: center;
`;

type NavigationLink = {
  id: number;
  label: string;
  path: string;
};

type Props = {
  navigationLinks?: {
    [key: string]: NavigationLink;
  };
};

export const Navigation = ({ navigationLinks = routes }: Props) => (
  <StyledNavigation>
    {Object.values(navigationLinks).map(({ id, label, path }) => (
      <Link
        key={id}
        to={path}
        title={label}
        data-testid={`navigate-to-${label}-page`}
      >
        <FormattedText label={label} />
      </Link>
    ))}
  </StyledNavigation>
);
