import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../../../src/redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../../src/navigation/types';
import {RouteProp} from '@react-navigation/native';
import ResetPassword from '../ResetPassword';

describe('Rest Password screen', () => {
  const resetPassword = (
    <Provider store={store}>
      <ResetPassword
        navigation={
          {navigate: jest.fn()} as unknown as NativeStackNavigationProp<
            AuthStackParameterList,
            'ResetPassword',
            undefined
          >
        }
        route={
          undefined as unknown as RouteProp<
            AuthStackParameterList,
            'ResetPassword'
          >
        }
      />
    </Provider>
  );

  it('renders correctly', () => {
    render(resetPassword);
  });

  it('should update pa#$%&*value', () => {
    const {getByTestId} = render(resetPassword);
    const passwordInput = getByTestId('reset-password-password-input');
    fireEvent.changeText(passwordInput, 'password-123');
    expect(passwordInput.props.value).toBe('password-123');
  });

  it('should not accept pa#$%&*value unnessary characters', () => {
    const {getByTestId} = render(resetPassword);
    const passwordInput = getByTestId('reset-password-password-input');
    fireEvent.changeText(passwordInput, '\\/<>[]{}()=+');
    expect(passwordInput.props.value).toBe('');
  });

  it('should not accept invalid password formats', () => {
    const {getByTestId} = render(resetPassword);
    const passwordInput = getByTestId('reset-password-password-input');
    fireEvent.changeText(passwordInput, '1234');
    const errorText = getByTestId('reset-password-password-input-error-text');
    expect(errorText.children).toContain('Password must be between 10 and 20');
  });

  it('should accept valid password formats', () => {
    const {getByTestId, findByText} = render(resetPassword);
    const passwordInput = getByTestId('reset-password-password-input');
    fireEvent.changeText(passwordInput, '1234567890abc');
    const errorText = findByText('Password must be between 10 and 20');
    return expect(errorText).rejects.toThrow();
  });

  it('should respond to confirm button press', () => {
    const {getByTestId} = render(resetPassword);
    const submitButton = getByTestId('reset-password-confirm-button');
    fireEvent.press(submitButton);
  });

  it('should respond to cancel button press', () => {
    const {getByTestId} = render(resetPassword);
    const loginButton = getByTestId('reset-password-cancel-button');
    fireEvent.press(loginButton);
  });
});
