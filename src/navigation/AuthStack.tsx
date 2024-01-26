import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParameterList} from './types';
import Welcome from '../presentation/auth/Welcome/Welcome';
import Login from '../presentation/auth/Login/Login';
import Signup from '../presentation/auth/Signup/Signup';

const Stack = createNativeStackNavigator<AuthStackParameterList>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
