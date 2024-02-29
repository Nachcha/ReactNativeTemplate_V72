import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Welcome from '../Welcome';
import {Provider} from 'react-redux';
import {store} from '../../../../../src/redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../../src/navigation/types';
import {RouteProp} from '@react-navigation/native';

describe('Welcome screen', () => {
  const welcome = (
    <Provider store={store}>
      <Welcome
        navigation={
          {navigate: jest.fn()} as unknown as NativeStackNavigationProp<
            AuthStackParameterList,
            'Welcome',
            undefined
          >
        }
        route={
          undefined as unknown as RouteProp<AuthStackParameterList, 'Welcome'>
        }
      />
    </Provider>
  );

  it('renders correctly', () => {
    render(welcome);
  });

  it('should respond to signup button press', () => {
    const {getByTestId} = render(welcome);
    const forgotPasswordButton = getByTestId('welcome-continue-button');
    fireEvent.press(forgotPasswordButton);
  });
});
