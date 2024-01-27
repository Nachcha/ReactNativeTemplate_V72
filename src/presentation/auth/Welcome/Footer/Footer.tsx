import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const Footer: React.FC = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.topicText}>
        {t('welcome-to-react-native-73-template')}
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonPrimary
          onPress={() => {
            navigation.navigate('Login' as never);
          }}
          style={styles.button}
          label={t('get-started')}
          fill={false}
        />
      </View>
    </View>
  );
};

export default Footer;
