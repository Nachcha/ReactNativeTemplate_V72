import {Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../../assets/images/Images';

const Header: React.FC = () => {
  return (
    <Image
      source={Images.welcome_image}
      style={styles.image}
      resizeMode="contain"
    />
  );
};

export default Header;
