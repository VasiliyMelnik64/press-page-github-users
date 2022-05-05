import { memo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { PageLayout } from '../../components/layout/PageLayout';
import { FormattedText } from '../../components/formatting/FormattedText';
import { HeadTitle, HeadSubTitle } from '../../components/styles';
import { Image } from '../../components/Image';
import { assets } from '../../assets';
import { themesSelector, Themes } from '../../modules/themes/themes-slice';

const Section = styled.div`
  display: flex;
  flex: 1 1 50%;
  align-items: center;
  justify-content: center;

  &:first-of-type {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Container = styled.section`
  display: flex;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const HomePage = memo(() => {
  const navigate = useNavigate();
  const currentTheme = useSelector(themesSelector);

  const handleClick = () => {
    navigate('/users');
  };

  const getLogo = () =>
    currentTheme === Themes.Light ? assets.logos.dark : assets.logos.light;

  return (
    <PageLayout>
      <Container>
        <Section>
          <HeadTitle>
            <FormattedText label='home.heading.text' />
          </HeadTitle>
          <HeadSubTitle>
            <FormattedText label='home.secondary.text' />
          </HeadSubTitle>
          <Button
            variant='outlined'
            size='large'
            data-testid='redirect-to-users-page'
            onClick={handleClick}
          >
            <FormattedText label='users.list.view' />
          </Button>
        </Section>
        <Section>
          <Image height='100' src={getLogo()} />
        </Section>
      </Container>
    </PageLayout>
  );
});
