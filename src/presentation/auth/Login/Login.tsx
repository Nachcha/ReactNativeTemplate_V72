import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import LoginForm from './LoginForm/LoginForm';
import Header from './Header/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../navigation/types';

const Login: React.FC<
  NativeStackScreenProps<AuthStackParameterList, 'Login'>
> = ({navigation}) => {
  return (
    <AuthScreenLayout
      header={<Header />}
      footer={<LoginForm navigation={navigation} />}
    />
  );
};

export default Login;
