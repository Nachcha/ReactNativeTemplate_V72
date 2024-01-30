import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import AuthStack from './AuthStack';
// import AppStack from './AppStack';
import {useEffect, useState} from 'react';
import BottomTabs from './BottomTabs';

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
  useEffect(() => {
    if (isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
