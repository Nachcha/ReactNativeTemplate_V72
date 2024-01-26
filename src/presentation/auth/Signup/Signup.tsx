import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import SignupForm from './SignupForm/SignupForm';

const Signup: React.FC = () => {
  return <AuthScreenLayout header={<></>} footer={<SignupForm />} />;
};

export default Signup;
