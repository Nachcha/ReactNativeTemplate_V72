import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../../../../../src/presentation/auth/Login/Login';
import {Provider} from 'react-redux';
import {store} from '../../../../../src/redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../../src/navigation/types';
import {RouteProp} from '@react-navigation/native';

describe('Login screen', () => {
  const login = (
    <Provider store={store}>
      <Login
        navigation={
          {navigate: jest.fn()} as unknown as NativeStackNavigationProp<
            AuthStackParameterList,
            'Login',
            undefined
          >
        }
        route={
          undefined as unknown as RouteProp<AuthStackParameterList, 'Login'>
        }
      />
    </Provider>
  );

  it('renders correctly', () => {
    render(login);
  });

  it('should update email input value', () => {
    const {getByTestId} = render(login);
    const emailInput = getByTestId('login-email-input');
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });

  it('should not accept unnessary characters for email', () => {
    const {getByTestId} = render(login);
    const emailInput = getByTestId('login-email-input');
    fireEvent.changeText(emailInput, '#$%&*');
    expect(emailInput.props.value).toBe('');
  });

  it('should not accept invalid email formats', () => {
    const {getByTestId} = render(login);
    const emailInput = getByTestId('login-email-input');
    fireEvent.changeText(emailInput, 'invalid_email');
    const errorText = getByTestId('login-email-input-error-text');
    expect(errorText.children).toContain('Invalid email format');
  });

  it('should accept valid email formats', () => {
    const {getByTestId, findByText} = render(login);
    const emailInput = getByTestId('login-email-input');
    fireEvent.changeText(emailInput, 'valid_email@example.com');
    const errorText = findByText('Invalid email format');
    return expect(errorText).rejects.toThrow();
  });

  it('should update pa#$%&*value', () => {
    const {getByTestId} = render(login);
    const passwordInput = getByTestId('login-password-input');
    fireEvent.changeText(passwordInput, 'password123');
    expect(passwordInput.props.value).toBe('password123');
  });

  it('should respond to login button press', () => {
    const {getByTestId} = render(login);
    const submitButton = getByTestId('login-login-button');
    fireEvent.press(submitButton);
  });

  it('should respond to forgot password button press', () => {
    const {getByTestId} = render(login);
    const forgotPasswordButton = getByTestId('login-forgot-password-button');
    fireEvent.press(forgotPasswordButton);
  });
});
