import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';

const Footer: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.topicText}>
        {'Welcome to\nReactNative-73\nTemplate'}
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonPrimary
          onPress={() => {
            navigation.navigate('Login' as never);
          }}
          style={styles.button}
          label={'Get Started'}
          fill={false}
        />
      </View>
    </View>
  );
};

export default Footer;
