import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import SignupForm from './SignupForm/SignupForm';
import Header from './Header/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../navigation/types';

const Signup: React.FC<
  NativeStackScreenProps<AuthStackParameterList, 'Signup'>
> = ({navigation}) => {
  return (
    <AuthScreenLayout
      header={<Header />}
      footer={<SignupForm navigation={navigation} />}
    />
  );
};

export default Signup;
