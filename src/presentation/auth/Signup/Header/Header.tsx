import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Register Now!</Text>
    </View>
  );
};

export default Header;
