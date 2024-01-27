import {Keyboard, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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

const SignupForm: React.FC = () => {
  const {formState, handleFormState} = useFormState();
  const navigation = useNavigation();
  const [keyboardStatus, setKeyboardStatus] = useState<Boolean>(false);
  const {t} = useTranslation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.footerContainer}>
      <InputText
        label={t('username')}
        placeholder={t('enter-your-username')}
        value={formState.formData.username}
        onChangeText={text => {
          handleFormState({value: text, field: 'username', type: 'change'});
        }}
        isValid={formState.formValidation.username.isValid}
        errorText={formState.formValidation.username.comment}
        secureTextEntry={false}
        iconLeft={
          <IconFA
            name={'user-o'}
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
      />
      <InputText
        label={t('email')}
        placeholder={t('enter-your-email')}
        value={formState.formData.email}
        onChangeText={text => {
          handleFormState({value: text, field: 'email', type: 'change'});
        }}
        isValid={formState.formValidation.email.isValid}
        errorText={formState.formValidation.email.comment}
        secureTextEntry={false}
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
      <InputText
        label={t('confirm-password')}
        placeholder={t('re-enter-your-password')}
        value={formState.formData.confirmPassword}
        onChangeText={text => {
          handleFormState({
            value: text,
            field: 'confirmPassword',
            type: 'change',
          });
        }}
        isValid={formState.formValidation.confirmPassword.isValid}
        errorText={formState.formValidation.confirmPassword.comment}
        iconLeft={
          <IconF
            name={'lock'}
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
        secureTextEntry={formState.formValidation.password.isSecured}
      />
      {!keyboardStatus && (
        <>
          <ButtonPrimary
            onPress={() => {}}
            label={t('signup')}
            fill={true}
            style={styles.buttonContainer}
          />
          <ButtonPrimary
            onPress={() => {
              navigation.navigate('Login' as never);
            }}
            label={t('login')}
            fill={false}
            style={styles.buttonContainer}
          />
        </>
      )}
    </View>
  );
};

export default SignupForm;
