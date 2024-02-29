import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../navigation/types';
import InputText from '../../../../components/inputs/InputText/InputText';
import VectorIcon from '../../../../components/elements/VectorIcon/VectorIcon';
import {getScaleNumber} from '../../../../utils/dimentions/RefDimentions';
import Colors from '../../../../utils/colors/Colors';
import {useTranslation} from 'react-i18next';
import useFormState from './useFormState';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';

interface ILResetPasswordFormProps {
  navigation: NativeStackNavigationProp<
    AuthStackParameterList,
    'ResetPassword',
    undefined
  >;
}

const ResetPasswordForm: React.FC<ILResetPasswordFormProps> = ({
  navigation,
}) => {
  const {formState, handleFormState} = useFormState();
  const {t} = useTranslation();
  return (
    <View style={styles.footerContainer}>
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
        testID="login-password-input"
        accessibilityLabel="login-password-input"
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
        secureTextEntry={formState.formValidation.confirmPassword.isSecured}
        testID="login-password-input"
        accessibilityLabel="login-password-input"
      />
      <ButtonPrimary
        onPress={() => {
          console.log('authenticate pressed');
        }}
        testID="reset-password-confirm-button"
        accessibilityLabel="reset-password-confirm-button"
        label={t('confirm')}
        fill={true}
        style={styles.buttonContainer}
      />
      <ButtonPrimary
        onPress={() => {
          navigation.navigate('Login');
        }}
        testID="reset-password-cancel-button"
        accessibilityLabel="reset-password-cencel-button"
        label={t('cancel')}
        fill={false}
        style={styles.buttonContainer}
      />
    </View>
  );
};

export default ResetPasswordForm;
