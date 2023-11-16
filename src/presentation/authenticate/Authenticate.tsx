import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWithFooterAndHeader from '../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import LoginForm from './LoginForm/LoginForm';
import Header from '../../components/elements/Header/Header';
import FooterActionsContainer from '../../components/layouts/FooterActionsContainer/FooterActionsContainer';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderBackButton: React.FC = () => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Bk</Text>
    </TouchableOpacity>
  );
};

const HeaderRightButton: React.FC = () => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
      }}>
      <Icon name="rocket" size={30} color="#900" />
    </TouchableOpacity>
  );
};

const Authenticate: React.FC = () => {
  return (
    <ScreenWithFooterAndHeader
      header={
        <Header topic="Header One" leftButton={<HeaderBackButton />}>
          <HeaderRightButton />
          <HeaderRightButton />
        </Header>
      }
      footer={
        <FooterActionsContainer>
          <Text>Footer 1</Text>
          <Text>Footer 2</Text>
        </FooterActionsContainer>
      }
      style={styles.screen}
      innerStyle={styles.window}>
      <LoginForm />
    </ScreenWithFooterAndHeader>
  );
};

export default Authenticate;
