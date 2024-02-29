import {Keyboard, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputText from '../../../../components/inputs/InputText/InputText';
import useFormState from './useFormState';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import styles from './styles';
import {getScaleNumber} from '../../../../utils/dimentions/RefDimentions';
import Colors from '../../../../utils/colors/Colors';
import {useTranslation} from 'react-i18next';
import VectorIcon from '../../../../components/elements/VectorIcon/VectorIcon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../navigation/types';

interface ISignupFormProps {
  navigation: NativeStackNavigationProp<
    AuthStackParameterList,
    'Signup',
    undefined
  >;
}

const SignupForm: React.FC<ISignupFormProps> = ({navigation}) => {
  const {formState, handleFormState} = useFormState();
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
          <VectorIcon
            type={'FontAwesome'}
            name={'user-o'}
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
        testID="signup-username-input"
        accessibilityLabel="signup-username-input"
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
          <VectorIcon
            type={'FontAwesome'}
            name={'envelope-o'}
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
        testID="signup-email-input"
        accessibilityLabel="signup-email-input"
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
          <VectorIcon
            type="Feather"
            name="lock"
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
        secureTextEntry={formState.formValidation.password.isSecured}
        testID="signup-password-input"
        accessibilityLabel="signup-password-input"
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
          <VectorIcon
            type="Feather"
            name="lock"
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
        secureTextEntry={formState.formValidation.password.isSecured}
        testID="signup-confirm-password-input"
        accessibilityLabel="signup-confirm-password-input"
      />
      {!keyboardStatus && (
        <>
          <ButtonPrimary
            onPress={() => {}}
            label={t('signup')}
            fill={true}
            style={styles.buttonContainer}
            testID="signup-signup-button"
            accessibilityLabel="signup-signup-button"
          />
          <ButtonPrimary
            onPress={() => {
              navigation.navigate('Login');
            }}
            label={t('login')}
            fill={false}
            style={styles.buttonContainer}
            testID="signup-login-button"
            accessibilityLabel="signup-login-button"
          />
        </>
      )}
    </View>
  );
};

export default SignupForm;
