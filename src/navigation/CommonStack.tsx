import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CommonStackParameterList} from './types';
import Product from '../presentation/common/Product/Product';
import ProductList from '../presentation/common/ProductList/ProductList';

const Stack = createNativeStackNavigator<CommonStackParameterList>();

export default function CommonStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: true,
        headerBackButtonMenuEnabled: true,
      }}
      initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
