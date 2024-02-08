/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import Settings from '../presentation/app/Settings/Settings';
import {AppStackParameterList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../presentation/app/About/About';
import Analytics from '../presentation/app/Analytics/Analytics';
import Home from '../presentation/app/Home/Home';
import Profile from '../presentation/app/Profile/Profile';
import Colors from '../utils/colors/Colors';
import BottomTabBarOne from '../components/elements/BottomTabsOne/BottomTabsOne';

const Tab = createBottomTabNavigator<AppStackParameterList>();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarIconStyle: {color: Colors.white},
  tabBarIconSize: 30,
};

export default function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <BottomTabBarOne {...props} />}>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
