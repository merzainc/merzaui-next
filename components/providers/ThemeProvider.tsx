'use client';

import * as React from 'react';
import {
  ThemeProvider as MerzaThemesProvider,
  type ThemeProviderProps,
} from '@merzaui/react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <MerzaThemesProvider {...props}>{children}</MerzaThemesProvider>;
}
