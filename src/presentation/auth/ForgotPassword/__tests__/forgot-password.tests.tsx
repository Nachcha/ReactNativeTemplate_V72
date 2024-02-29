import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../../../../src/redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../../src/navigation/types';
import {RouteProp} from '@react-navigation/native';
import ForgotPassword from '../ForgotPassword';

describe('Forgot Password screen', () => {
  const forgotPassword = (
    <Provider store={store}>
      <ForgotPassword
        navigation={
          {navigate: jest.fn()} as unknown as NativeStackNavigationProp<
            AuthStackParameterList,
            'ForgotPassword',
            undefined
          >
        }
        route={
          undefined as unknown as RouteProp<
            AuthStackParameterList,
            'ForgotPassword'
          >
        }
      />
    </Provider>
  );

  it('renders correctly', () => {
    render(forgotPassword);
  });

  it('should update email input value', () => {
    const {getByTestId} = render(forgotPassword);
    const emailInput = getByTestId('forgot-password-email-input');
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toBe('test@example.com');
  });

  it('should not accept unnessary characters for email', () => {
    const {getByTestId} = render(forgotPassword);
    const emailInput = getByTestId('forgot-password-email-input');
    fireEvent.changeText(emailInput, '#$%&*');
    expect(emailInput.props.value).toBe('');
  });

  it('should not accept invalid email formats', () => {
    const {getByTestId} = render(forgotPassword);
    const emailInput = getByTestId('forgot-password-email-input');
    fireEvent.changeText(emailInput, 'invalid_email');
    const errorText = getByTestId('forgot-password-email-input-error-text');
    expect(errorText.children).toContain('Invalid email format');
  });

  it('should accept valid email formats', () => {
    const {getByTestId, findByText} = render(forgotPassword);
    const emailInput = getByTestId('forgot-password-email-input');
    fireEvent.changeText(emailInput, 'valid_email@example.com');
    const errorText = findByText('Invalid email format');
    return expect(errorText).rejects.toThrow();
  });

  it('should respond to reset button press', () => {
    const {getByTestId} = render(forgotPassword);
    const submitButton = getByTestId('forgot-password-reset-button');
    fireEvent.press(submitButton);
  });

  it('should respond to cancel button press', () => {
    const {getByTestId} = render(forgotPassword);
    const loginButton = getByTestId('forgot-password-cancel-button');
    fireEvent.press(loginButton);
  });
});
