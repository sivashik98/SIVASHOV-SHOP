import { UnistylesRegistry } from 'react-native-unistyles';

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  superLarge: 2000,
  tvLike: 4000,
} as const;

export const lightTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#00152F0F',
    accent: '#9C73F8FF',
    premium: '#fff7ee',
    hot: '#fff2f2',
    typography: '#181818',
    typographySecondary: '#7D8287',
    shadow: '#222C40FF',
  },
  assets: {
    favoriteBtn: require('lottie/heart-bounce.json'),
  },
} as const;
export const darkTheme = {
  colors: {
    primary: '#222C40FF',
    secondary: '#3d4963',
    accent: '#6239b6',
    premium: '#4b3a72',
    hot: '#2a0a0a',
    typography: '#e9eaea',
    typographySecondary: '#ccbbfd',
    shadow: '#8994cd',
  },
  assets: {
    favoriteBtn: require('lottie/heart.json'),
  },
} as const;

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
