import * as React from 'react';
import Settings from '../presentation/app/Settings/Settings';
import {AppStackParameterList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from '../presentation/app/About/About';
import Analytics from '../presentation/app/Analytics/Analytics';
import Home from '../presentation/app/Home/Home';
import Profile from '../presentation/app/Profile/Profile';
import CustomBottomTab from '../components/elements/CustomBottomTab/CustomBottomTab';

const Tab = createBottomTabNavigator<AppStackParameterList>();

const screenOptions = {
  headerShown: false,
};

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group screenOptions={screenOptions}>
        <Tab.Screen
          name="About"
          component={About}
          options={{tabBarLabel: 'About'}}
        />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{tabBarLabel: 'Analytics'}}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{tabBarLabel: 'Profile'}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{tabBarLabel: 'Settings'}}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
