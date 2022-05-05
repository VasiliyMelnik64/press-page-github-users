import { createSlice } from '@reduxjs/toolkit';

export enum Themes {
  Light = 'light',
  Dark = 'dark',
}

type StateType = {
  currentTheme: Themes;
};

type SliceReducers = {
  toggleTheme: (state: StateType) => void;
};

export const themesSlice = createSlice<StateType, SliceReducers>({
  name: 'themes',
  initialState: {
    currentTheme: Themes.Light,
  },
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme =
        state.currentTheme === Themes.Light ? Themes.Dark : Themes.Light;
    },
  },
});

export const themesSelector = (state: any): Themes => state.themes.currentTheme;

export const { toggleTheme } = themesSlice.actions;

export const { reducer: themesReducer } = themesSlice;
