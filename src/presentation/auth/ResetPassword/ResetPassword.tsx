import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import Header from './Header/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../navigation/types';
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm';

const ResetPassword: React.FC<
  NativeStackScreenProps<AuthStackParameterList, 'ResetPassword'>
> = ({navigation}) => {
  return (
    <AuthScreenLayout
      header={<Header />}
      footer={<ResetPasswordForm navigation={navigation} />}
    />
  );
};

export default ResetPassword;
