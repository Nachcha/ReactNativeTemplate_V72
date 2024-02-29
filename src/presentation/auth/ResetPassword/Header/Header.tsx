import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Images from '../../../../assets/images/Images';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.forgot_password_image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>Reset Password</Text>
    </View>
  );
};

export default Header;
