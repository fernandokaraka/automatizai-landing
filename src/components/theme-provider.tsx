import { ReactNode, useEffect } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark';
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'theme'
}: ThemeProviderProps) {
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey) as 'light' | 'dark' | null;
      const themeToApply = saved ?? defaultTheme;

      if (themeToApply === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {
      // No-op if localStorage is unavailable
    }
  }, [defaultTheme, storageKey]);

  return <>{children}</>;
}

export default ThemeProvider;


