import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from '../../components/styles';
import { SiteIcon } from '../../components/layout/SiteIcon';
import { SiteTitle } from '../../components/layout/SiteTitle';
import { themesSelector } from '../../modules/themes/themes-slice';
import { themes } from '../../themes';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const currentTheme = useSelector(themesSelector);

  return (
    <StyledThemeProvider theme={themes[currentTheme]}>
      <SiteIcon />
      <SiteTitle />
      <GlobalStyles />
      {children}
      <ToastContainer
        transition={Bounce}
        closeButton={false}
        className='ToastContainer'
        toastClassName='ToastInner'
      />
    </StyledThemeProvider>
  );
};
