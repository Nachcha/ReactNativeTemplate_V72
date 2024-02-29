import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../navigation/types';

const Welcome: React.FC<
  NativeStackScreenProps<AuthStackParameterList, 'Welcome'>
> = ({navigation}) => {
  return (
    <AuthScreenLayout
      header={<Header />}
      footer={<Footer navigation={navigation} />}
    />
  );
};

export default Welcome;
