'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        }
    },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

