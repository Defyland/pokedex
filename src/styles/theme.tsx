import * as React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {withChildren} from '~/utils/interfaces/customTypes';

export const theme = {
  space: [4, 8, 16, 24, 32, 40],
  fontSizes: {
    tiny: '12px',
    xsmall: '14px',
    small: '16px',
    default: '18px',
    big: '20px',
    large: '25px',
    xlarge: '34px',
  },
  colors: {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#FA6C6C',
    water: '#6890F0',
    grass: '#48CFB2',
    electric: '#FFCE4B',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
    white: '#FFF',
  },
  raddi: {
    Light: 4,
    Medium: 8,
    Circle: 100,
  },
};

export const ThemeProvider = ({children}: withChildren) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
