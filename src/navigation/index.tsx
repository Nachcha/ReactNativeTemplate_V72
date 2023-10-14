import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {/* <MainStack.Screen name="Home" component={HomeScreen} /> */}
        {/* <MainStack.Screen name="Profile" component={ProfileScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
