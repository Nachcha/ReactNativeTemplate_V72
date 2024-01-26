import React from 'react';
import AuthScreenLayout from '../../../components/layouts/AuthScreenLayout/AuthScreenLayout';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Welcome: React.FC = () => {
  return <AuthScreenLayout header={<Header />} footer={<Footer />} />;
};

export default Welcome;
