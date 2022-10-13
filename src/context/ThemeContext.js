import React, {createContext, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {lightThemeColors, darkThemeColors} from '../Colors';

export const ThemeContext = createContext({
  dark: false,
  colors: lightThemeColors,
  setScheme: () => {},
});

export const ThemeProvider = props => {
  const colorScheme = useColorScheme() == 'dark';
  const [isDark, setIsDark] = useState(colorScheme);

  useEffect(() => {
    setIsDark(colorScheme);
  }, [colorScheme]);

  const defaultTheme = {
    dark: isDark,
    colors: isDark ? darkThemeColors : lightThemeColors,
    setScheme: theme => setIsDark(theme == 'dark'),
  };
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
