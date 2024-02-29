import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import {useTranslation} from 'react-i18next';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../navigation/types';

interface IFooterProps {
  navigation: NativeStackNavigationProp<
    AuthStackParameterList,
    'Welcome',
    undefined
  >;
}

const Footer: React.FC<IFooterProps> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.topicText}>
        {t('welcome-to-react-native-73-template')}
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonPrimary
          onPress={() => {
            navigation.navigate('Login');
          }}
          testID="welcome-continue-button"
          accessibilityLabel="welcome-continue-button"
          style={styles.button}
          label={t('get-started')}
          fill={false}
        />
      </View>
    </View>
  );
};

export default Footer;
