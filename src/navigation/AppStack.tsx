import * as React from 'react';
import {AppStackParameterList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../presentation/testing/ItemMap/ItemMap';
import Product from '../presentation/testing/ItemDetails/ItemDetails';
import BottomTabStack from './BottomTabStack';
import BasicAnimation from '../presentation/testing/BasicAnimation/BasicAnimation';
import PanGuestureHandler from '../presentation/testing/PanGuestureHandler/PanGuestureHandler';
import InterpolateScrollView from '../presentation/testing/InterpolateScrollView/InterpolateScrollView';
import InterpolateColors from '../presentation/testing/InterpolateColors/InterpolateColors';
import PinchGestureHandler from '../presentation/testing/PinchGuestureHandler/PinchGuestureHandler';

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
        <Stack.Screen
          name="PanGuestureHandler"
          component={PanGuestureHandler}
        />
        <Stack.Screen
          name="InterpolateScrollView"
          component={InterpolateScrollView}
        />
        <Stack.Screen name="InterpolateColors" component={InterpolateColors} />
        <Stack.Screen
          name="PinchGestureHandler"
          component={PinchGestureHandler}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
