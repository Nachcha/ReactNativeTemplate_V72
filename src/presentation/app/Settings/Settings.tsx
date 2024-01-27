import {Text} from 'react-native';
import React from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import Header from '../../../components/layouts/Header/Header';
import LeftButton from '../../../components/layouts/Header/LeftButton/LeftButton';
import RightButton from '../../../components/layouts/Header/RightButton/RightButton';
import FooterActionsContainer from '../../../components/layouts/FooterActionsContainer/FooterActionsContainer';
import styles from './styles';

const Settings: React.FC = () => {
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
        </FooterActionsContainer>
      }
      style={styles.screen}
      innerStyle={styles.window}>
      <Text>Settings</Text>
    </ScreenWithFooterAndHeader>
  );
};

export default Settings;
