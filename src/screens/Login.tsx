import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackParams } from '~/App';

interface Props {
  navigation: StackNavigationProp<StackParams>;
  route: RouteProp<StackParams, 'Login'>;
}

const Login: React.FC<Props> = ({ navigation }) => {
  function login() {
    navigation.navigate('Home');
  }
  return (
    <>
      <TouchableOpacity style={{ height: '100%', width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => login()}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ height: '100%', width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => navigation.navigate('Register')}
      >
        <Text>register</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
