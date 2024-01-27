import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import LoginForm from './LoginForm/LoginForm';
import Header from './Header/Header';

const Login: React.FC = () => {
  return <AuthScreenLayout header={<Header />} footer={<LoginForm />} />;
};

export default Login;
