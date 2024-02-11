import * as React from 'react';
import {AppStackParameterList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../presentation/testing/ItemMap/ItemMap';
import Product from '../presentation/testing/ItemDetails/ItemDetails';
import BottomTabStack from './BottomTabStack';
import BasicAnimation from '../presentation/testing/BasicAnimation/BasicAnimation';

const Stack = createNativeStackNavigator<AppStackParameterList>();

const groupTwoScreenOptions = {
  headerBackButtonMenuEnabled: true,
};

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTabs" component={BottomTabStack} />
      </Stack.Group>
      <Stack.Group screenOptions={groupTwoScreenOptions}>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
