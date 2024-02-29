import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../../../src/redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../../src/navigation/types';
import {RouteProp} from '@react-navigation/native';
import Signup from '../Signup';

describe('Signup screen', () => {
  const signup = (
    <Provider store={store}>
      <Signup
        navigation={
          {navigate: jest.fn()} as unknown as NativeStackNavigationProp<
            AuthStackParameterList,
            'Signup',
            undefined
          >
        }
        route={
          undefined as unknown as RouteProp<AuthStackParameterList, 'Signup'>
        }
      />
    </Provider>
  );

  it('renders correctly', () => {
    render(signup);
  });

  it('should update username input value', () => {
    const {getByTestId} = render(signup);
    const emailInput = getByTestId('signup-username-input');
    fireEvent.changeText(emailInput, 'pasindu-123');
    expect(emailInput.props.value).toBe('pasindu-123');
  });

  it('should not accept unnessary characters for username', () => {
    const {getByTestId} = render(signup);
    const emailInput = getByTestId('signup-username-input');
    fireEvent.changeText(emailInput, '@\\/<>[]{}()=+!#$%^&*,"');
    expect(emailInput.props.value).toBe('');
  });

  it('should update email input value', () => {
    const {getByTestId} = render(signup);
    const emailInput = getByTestId('signup-email-input');
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });

  it('should not accept unnessary characters for email', () => {
    const {getByTestId} = render(signup);
    const emailInput = getByTestId('signup-email-input');
    fireEvent.changeText(emailInput, '#$%&*');
    expect(emailInput.props.value).toBe('');
  });

  it('should not accept invalid email formats', () => {
    const {getByTestId} = render(signup);
    const emailInput = getByTestId('signup-email-input');
    fireEvent.changeText(emailInput, 'invalid_email');
    const errorText = getByTestId('signup-email-input-error-text');
    expect(errorText.children).toContain('Invalid email format');
  });

  it('should accept valid email formats', () => {
    const {getByTestId, findByText} = render(signup);
    const emailInput = getByTestId('signup-email-input');
    fireEvent.changeText(emailInput, 'valid_email@example.com');
    const errorText = findByText('Invalid email format');
    return expect(errorText).rejects.toThrow();
  });

  it('should update pa#$%&*value', () => {
    const {getByTestId} = render(signup);
    const passwordInput = getByTestId('signup-password-input');
    fireEvent.changeText(passwordInput, 'password-123');
    expect(passwordInput.props.value).toBe('password-123');
  });

  it('should not accept pa#$%&*value unnessary characters', () => {
    const {getByTestId} = render(signup);
    const passwordInput = getByTestId('signup-password-input');
    fireEvent.changeText(passwordInput, '\\/<>[]{}()=+');
    expect(passwordInput.props.value).toBe('');
  });

  it('should not accept invalid password formats', () => {
    const {getByTestId} = render(signup);
    const passwordInput = getByTestId('signup-password-input');
    fireEvent.changeText(passwordInput, '1234');
    const errorText = getByTestId('signup-password-input-error-text');
    expect(errorText.children).toContain('Password must be between 10 and 20');
  });

  it('should accept valid password formats', () => {
    const {getByTestId, findByText} = render(signup);
    const passwordInput = getByTestId('signup-password-input');
    fireEvent.changeText(passwordInput, '1234567890abc');
    const errorText = findByText('Password must be between 10 and 20');
    return expect(errorText).rejects.toThrow();
  });

  it('should respond to signup button press', () => {
    const {getByTestId} = render(signup);
    const submitButton = getByTestId('signup-signup-button');
    fireEvent.press(submitButton);
  });

  it('should respond to login button press', () => {
    const {getByTestId} = render(signup);
    const loginButton = getByTestId('signup-login-button');
    fireEvent.press(loginButton);
  });
});
