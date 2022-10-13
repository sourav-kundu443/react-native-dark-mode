import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const LoginScreen = () => {
  const {dark, colors, setScheme} = useTheme();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[Styles.container, {backgroundColor: colors.primary}]}>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Text style={[Styles.titleText, {color: colors.secondary}]}>
        Login Screen
      </Text>
      <TextInput
        value={userName}
        onChangeText={text => setUserName(text)}
        placeholder={'User name'}
        placeholderTextColor={colors.secondary}
        style={[Styles.inputFieldStyle, {borderColor: colors.secondary}]}
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={'Password'}
        placeholderTextColor={colors.secondary}
        style={[Styles.inputFieldStyle, {borderColor: colors.secondary}]}
      />
      <TouchableOpacity
        style={[
          Styles.button,
          {
            shadowColor: colors.secondary,
            backgroundColor: colors.buttonBackground,
          },
        ]}>
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputFieldStyle: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: 'black',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOffset: {width: 10, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 30,
  },
});

export default LoginScreen;
