import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import SignupForm from './SignupForm/SignupForm';
import Header from './Header/Header';

const Signup: React.FC = () => {
  return <AuthScreenLayout header={<Header />} footer={<SignupForm />} />;
};

export default Signup;
