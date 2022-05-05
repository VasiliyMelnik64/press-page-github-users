import { useDispatch, useSelector } from 'react-redux';
import {
  themesSelector,
  toggleTheme,
  Themes,
} from '../modules/themes/themes-slice';

type SwitcherData = {
  checked: boolean;
  onChange: () => void;
};

export const useSwitcherState = (): SwitcherData => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(themesSelector);
  const checked = currentTheme === Themes.Dark;

  const onChange = (): void => {
    dispatch(toggleTheme());
  };

  return {
    checked,
    onChange,
  };
};
