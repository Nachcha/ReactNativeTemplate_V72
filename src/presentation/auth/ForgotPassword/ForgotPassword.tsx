import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm';
import Header from './Header/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../navigation/types';

const ForgotPassword: React.FC<
  NativeStackScreenProps<AuthStackParameterList, 'ForgotPassword'>
> = ({navigation}) => {
  return (
    <AuthScreenLayout
      header={<Header />}
      footer={<ForgotPasswordForm navigation={navigation} />}
    />
  );
};

export default ForgotPassword;
