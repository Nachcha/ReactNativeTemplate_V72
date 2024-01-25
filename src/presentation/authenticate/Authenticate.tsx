import {Text} from 'react-native';
import React from 'react';
import ScreenWithFooterAndHeader from '../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import LoginForm from './LoginForm/LoginForm';
import Header from '../../components/layouts/Header/Header';
import FooterActionsContainer from '../../components/layouts/FooterActionsContainer/FooterActionsContainer';
import styles from './styles';
import LeftButton from '../../components/layouts/Header/LeftButton/LeftButton';
import RightButton from '../../components/layouts/Header/RightButton/RightButton';

const Authenticate: React.FC = () => {
  return (
    <ScreenWithFooterAndHeader
      header={
        <Header topic="Header One" leftButton={<LeftButton />}>
          <RightButton />
          <RightButton />
          <RightButton />
        </Header>
      }
      footer={
        <FooterActionsContainer>
          <Text>Footer 1</Text>
          <Text>Footer 2</Text>
          <Text>Footer 3</Text>
        </FooterActionsContainer>
      }
      style={styles.screen}
      innerStyle={styles.window}>
      <LoginForm />
    </ScreenWithFooterAndHeader>
  );
};

export default Authenticate;
