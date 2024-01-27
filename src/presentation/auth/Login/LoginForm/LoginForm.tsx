import {View} from 'react-native';
import React from 'react';
import InputText from '../../../../components/inputs/InputText/InputText';
import useFormState from './useFormState';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import {getScaleNumber} from '../../../../utils/dimentions/refDimentions';
import Colors from '../../../../utils/colors/Colors';
import {useTranslation} from 'react-i18next';

const LoginForm = () => {
  const {formState, handleFormState} = useFormState();
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
    <View style={styles.footerContainer}>
      <InputText
        label={t('email')}
        placeholder={t('enter-your-email')}
        value={formState.formData.email}
        onChangeText={text => {
          handleFormState({value: text, field: 'email', type: 'change'});
        }}
        secureTextEntry={false}
        isValid={formState.formValidation.email.isValid}
        errorText={formState.formValidation.email.comment}
        iconLeft={
          <IconFA
            name={'envelope-o'}
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
      />
      <InputText
        label={t('password')}
        placeholder={t('enter-your-password')}
        value={formState.formData.password}
        onChangeText={text => {
          handleFormState({value: text, field: 'password', type: 'change'});
        }}
        isValid={formState.formValidation.password.isValid}
        errorText={formState.formValidation.password.comment}
        iconLeft={
          <IconF
            name={'lock'}
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
        secureTextEntry={formState.formValidation.password.isSecured}
      />
      <ButtonPrimary
        onPress={() => {}}
        label={t('login')}
        fill={true}
        style={styles.buttonContainer}
      />
      <ButtonPrimary
        onPress={() => {
          navigation.navigate('Signup' as never);
        }}
        label={t('signup')}
        fill={false}
        style={styles.buttonContainer}
      />
    </View>
  );
};

export default LoginForm;
