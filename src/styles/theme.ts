import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      neutrual: string;
      neutrual2: string;
      background: string;
    };
  }
}

export const muiTheme = createTheme({
  typography: {
    fontFamily: 'Gowun Dodum, sans-serif',
    fontSize: 18,
  },
});

export const theme: Theme = {
  colors: {
    primary: '#0080ff',
    secondary: '#ff7f00',
    neutrual: '#c0c0c0',
    neutrual2: '#808080',
    background: '#fff',
  },
};
