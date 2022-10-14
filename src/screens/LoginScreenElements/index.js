import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Input} from '@rneui/themed';

const LoginScreenElements = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.container}>
      <Input
        label="Username"
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        inputContainerStyle={Styles.inputContainerStyle}
        labelStyle={Styles.labelStyle}
      />
      <Input
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        inputContainerStyle={Styles.inputContainerStyle}
        labelStyle={Styles.labelStyle}
      />
      <Button
        title="Login"
        containerStyle={Styles.containerStyle}
        buttonStyle={Styles.buttonStyle}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  labelStyle: {
    marginBottom: 5,
  },
  containerStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonStyle: {
    width: '100%',
  },
});

export default LoginScreenElements;
