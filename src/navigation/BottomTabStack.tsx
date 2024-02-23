/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../presentation/app/About/About';
import Analytics from '../presentation/app/Analytics/Analytics';
import Home from '../presentation/app/Home/Home';
import Profile from '../presentation/app/Profile/Profile';
import Settings from '../presentation/app/Settings/Settings';
import BottomTabBarOne from '../components/elements/BottomTabsOne/BottomTabsOne';
import {AppStackParameterList, BottomTabStackParameterList} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabsIconMap} from '../components/elements/elementTypes';

const Tab = createBottomTabNavigator<BottomTabStackParameterList>();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
};

const iconList: BottomTabsIconMap = {
  About: {
    name: 'info',
    group: 'MaterialIcons',
  },
  Analytics: {
    name: 'lab-flask',
    group: 'Entypo',
  },
  Home: {
    name: 'home',
    group: 'Ionicons',
  },
  Profile: {
    name: 'person',
    group: 'Fontisto',
  },
  Settings: {
    name: 'settings',
    group: 'MaterialIcons',
  },
};

const BottomTabStack: React.FC<
  NativeStackScreenProps<AppStackParameterList, 'BottomTabs'>
> = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <BottomTabBarOne icons={iconList} {...props} />}>
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
