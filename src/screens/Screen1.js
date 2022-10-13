import React from 'react';
import {View, Text, Switch} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const Screen1 = () => {
  const {dark, colors, setScheme} = useTheme();
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.secondary}}>App</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={'#f4f3f4'}
        onValueChange={() => {
          dark ? setScheme('light') : setScheme('dark');
        }}
        value={dark}
      />
    </View>
  );
};

export default Screen1;
