import { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { Image } from './Image';
import { Switcher } from './Switcher';
import { assets } from '../assets';
import { themesSelector } from '../modules/themes/themes-slice';
import { Header as StyledHeader } from './styles';

const ImageBlock = styled.div`
  flex: 1 1 50%;
`;

export const Header = memo(() => {
  const currentTheme = useSelector(themesSelector);

  return (
    <StyledHeader>
      <ImageBlock>
        <Image src={assets.logos[currentTheme]} />
      </ImageBlock>
      <Navigation />
      <Switcher testId='theme-switcher' />
    </StyledHeader>
  );
});
