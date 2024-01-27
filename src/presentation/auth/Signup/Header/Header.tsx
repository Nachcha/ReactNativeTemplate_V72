import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';

const Header: React.FC = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('register-now')}</Text>
    </View>
  );
};

export default Header;
