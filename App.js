import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import Screen1 from './src/screens/Screen1';

const App = () => {
  return (
    <ThemeProvider>
      <Screen1 />
    </ThemeProvider>
  );
};

export default App;
