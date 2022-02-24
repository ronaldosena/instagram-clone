import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, View, Text, TextInput } from 'react-native';
import { StackParams } from '~/App';

import { Api } from '~/services/api';

interface Props {
  navigation: StackNavigationProp<StackParams>;
  route: RouteProp<StackParams, 'Login'>;
}

const Register: React.FC<Props> = ({ navigation }) => {
  const [username, setusername] = useState<string>('email@email.com');
  const [password, setpassword] = useState<string>('password');

  async function register() {
    var result = await Api.createUser(username, password);
    console.log(JSON.stringify(result.data));
    navigation.navigate('Home');
  }

  return (
    <>
      <Text>{username}</Text>
      <Text>{password}</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          onChangeText={(input) => {
            setusername(input);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(input) => {
            setpassword(input);
          }}
          style={styles.input}
        />
        <Button title="Sign Up" onPress={() => register()} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
});
export default Register;
