import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>Login Screen</Text>
      <TextInput
        value={userName}
        onChangeText={text => setUserName(text)}
        placeholder={'User name'}
        placeholderTextColor={'black'}
        style={Styles.inputFieldStyle}
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={'Password'}
        placeholderTextColor={'black'}
        style={Styles.inputFieldStyle}
      />
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
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
    borderColor: 'black',
    paddingHorizontal: 15,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
  titleText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 30,
  },
});

export default LoginScreen;
