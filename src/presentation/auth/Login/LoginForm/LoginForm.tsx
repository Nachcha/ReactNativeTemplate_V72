import {View} from 'react-native';
import React from 'react';
import InputText from '../../../../components/inputs/InputText/InputText';
import useFormState from './useFormState';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {getScaleNumber} from '../../../../utils/dimentions/RefDimentions';
import Colors from '../../../../utils/colors/Colors';
import {useTranslation} from 'react-i18next';
import VectorIcon from '../../../../components/elements/VectorIcon/VectorIcon';
import {Authencate} from '../../../../redux/common/actions';
import {useDispatch} from 'react-redux';

const LoginForm = () => {
  const {formState, handleFormState} = useFormState();
  const navigation = useNavigation();
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
      />
      <ButtonPrimary
        onPress={() => {
          dispatch(Authencate());
          console.log('authenticate pressed');
        }}
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
