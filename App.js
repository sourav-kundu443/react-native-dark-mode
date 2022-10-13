import React from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import Screen1 from './src/screens/Screen1';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <ThemeProvider>
      {/* <Screen1 /> */}
      <LoginScreen />
    </ThemeProvider>
  );
};

export default App;
