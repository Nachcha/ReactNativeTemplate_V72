import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from '../presentation/settings/Settings';
import {AppStackParameterList} from './types';

const Stack = createNativeStackNavigator<AppStackParameterList>();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
