import {View} from 'react-native';
import React from 'react';
import InputText from '../../../../components/inputs/InputText/InputText';
import useFormState from './useFormState';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import styles from './styles';
import {getScaleNumber} from '../../../../utils/dimentions/RefDimentions';
import Colors from '../../../../utils/colors/Colors';
import {useTranslation} from 'react-i18next';
import VectorIcon from '../../../../components/elements/VectorIcon/VectorIcon';
import {Authencate} from '../../../../redux/common/actions';
import {useDispatch} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParameterList} from '../../../../navigation/types';

interface ILoginFormProps {
  navigation: NativeStackNavigationProp<
    AuthStackParameterList,
    'Login',
    undefined
  >;
}

const LoginForm: React.FC<ILoginFormProps> = ({navigation}) => {
  const {formState, handleFormState} = useFormState();
  const {t} = useTranslation();
  const dispatch = useDispatch();

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
        testID="login-email-input"
        accessibilityLabel="login-email-input"
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
        testID="login-password-input"
        accessibilityLabel="login-password-input"
      />
      <ButtonPrimary
        onPress={() => {
          dispatch(Authencate());
          console.log('authenticate pressed');
        }}
        testID="loginButton"
        accessibilityLabel="loginButton"
        label={t('login')}
        fill={true}
        style={styles.buttonContainer}
      />
      <ButtonPrimary
        onPress={() => {
          navigation.navigate('Signup');
        }}
        testID="navigateToSignupButton"
        accessibilityLabel="navigateToSignupButton"
        label={t('signup')}
        fill={false}
        style={styles.buttonContainer}
      />
    </View>
  );
};

export default LoginForm;
