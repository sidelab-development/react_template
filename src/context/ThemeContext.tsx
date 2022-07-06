import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { usePersistedState } from '../hooks/usePersistedState';

type ThemeContextProps = {
  children: ReactNode;
}

type ThemeContextData = {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, toggleTheme] = usePersistedState();

  return (
    <ThemeContext.Provider value={{
      toggleTheme,
      theme,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
