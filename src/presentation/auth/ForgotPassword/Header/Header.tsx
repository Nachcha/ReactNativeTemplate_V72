import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../../assets/images/Images';
import {useTranslation} from 'react-i18next';

const Header: React.FC = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.forgot_password_image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>{t('forgot-password?')}</Text>
    </View>
  );
};

export default Header;
