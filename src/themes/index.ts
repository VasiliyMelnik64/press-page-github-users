import { darkTheme } from './dark';
import { lightTheme } from './light';

type ThemeType = {
  name: string;
  [key: string]: any;
};

type ThemesType = {
  [key: string]: ThemeType;
};

export const themes: ThemesType = {
  dark: darkTheme,
  light: lightTheme,
};
