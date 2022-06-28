import { createContext, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { usePersistedState } from '../hooks/usePersistedState';

type ModalContextProps = {
  children: ReactNode;
}

type ModalContextData = {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

export const ThemeContext = createContext({} as ModalContextData);

export const ThemeContextProvider = ({ children }: ModalContextProps) => {
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
