/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import i18next from './src/services/i18next';
import Authenticate from './src/presentation/authenticate/Authenticate';

function App(): JSX.Element {
  useEffect(() => {
    i18next.changeLanguage('en_uk');
  }, []);

  return <Authenticate />;
}

export default App;
