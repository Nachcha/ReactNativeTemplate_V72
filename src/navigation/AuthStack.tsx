import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParameterList} from './types';
import Welcome from '../presentation/auth/Welcome/Welcome';
import Login from '../presentation/auth/Login/Login';
import Signup from '../presentation/auth/Signup/Signup';

const Stack = createNativeStackNavigator<AuthStackParameterList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        animation: 'slide_from_right',
        headerShown: false,
      }}
      initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{gestureEnabled: true, gestureDirection: 'horizontal'}}
        name="Signup"
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
