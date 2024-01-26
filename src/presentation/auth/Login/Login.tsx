import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import LoginForm from './LoginForm/LoginForm';
import {Text} from 'react-native';

const Login: React.FC = () => {
  return (
    <AuthScreenLayout header={<Text>Login here</Text>} footer={<LoginForm />} />
  );
};

export default Login;
