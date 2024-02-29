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

interface ILForgotPasswordFormProps {
  navigation: NativeStackNavigationProp<
    AuthStackParameterList,
    'ForgotPassword',
    undefined
  >;
}

const ForgotPasswordForm: React.FC<ILForgotPasswordFormProps> = ({
  navigation,
}) => {
  const {formState, handleFormState} = useFormState();
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
          <VectorIcon
            type="FontAwesome"
            name="envelope-o"
            size={getScaleNumber(24)}
            color={Colors.senary}
          />
        }
        testID="forgot-password-email-input"
        accessibilityLabel="forgot-password-email-input"
      />
      <ButtonPrimary
        onPress={() => {
          navigation.navigate('ResetPassword');
        }}
        testID="forgot-password-reset-button"
        accessibilityLabel="forgot-password-reset-button"
        label={t('reset')}
        fill={true}
        style={styles.buttonContainer}
      />
      <ButtonPrimary
        onPress={() => {
          navigation.navigate('Login');
        }}
        testID="forgot-password-cancel-button"
        accessibilityLabel="forgot-password-cencel-button"
        label={t('cancel')}
        fill={false}
        style={styles.buttonContainer}
      />
    </View>
  );
};

export default ForgotPasswordForm;
