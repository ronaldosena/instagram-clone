import 'react-native-gesture-handler';
import React from 'react';
import { Main, Login, Profile, Camera, Register } from '~/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
declare const global: { HermesInternal: null | {} };

export type StackParams = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type TabsParams = {
  Main: undefined;
  Profile: undefined;
  Camera: { userId: string };
};

const MainStack = createStackNavigator<StackParams>();
const Tab = createBottomTabNavigator<TabsParams>();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Camera" component={Camera} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
