import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useSelector} from 'react-redux';

export default function Routes(): JSX.Element {
  const {isAuthenticated} = useSelector((state: any) => state.common);
  React.useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
