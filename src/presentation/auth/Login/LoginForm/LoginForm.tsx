import {View} from 'react-native';
import React from 'react';
import InputText from '../../../../components/inputs/InputText/InputText';
import useFormState from './useFormState';
import ButtonPrimary from '../../../../components/elements/ButtonPrimary/ButtonPrimary';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';

const LoginForm = () => {
  const {formState, handleFormState} = useFormState();
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <InputText
        label="Email"
        placeholder="Enter your username"
        value={formState.formData.email}
        onChangeText={text => {
          handleFormState({value: text, field: 'email', type: 'change'});
        }}
        secureTextEntry={false}
        isValid={formState.formValidation.email.isValid}
        errorText={formState.formValidation.email.comment}
        iconLeft={<IconFA name={'user-o'} size={24} color="gray" />}
      />
      <InputText
        label="Password"
        placeholder="Enter your password"
        value={formState.formData.password}
        onChangeText={text => {
          handleFormState({value: text, field: 'password', type: 'change'});
        }}
        isValid={formState.formValidation.password.isValid}
        errorText={formState.formValidation.password.comment}
        iconLeft={<IconF name={'lock'} size={24} color="gray" />}
        secureTextEntry={formState.formValidation.password.isSecured}
      />
      <ButtonPrimary
        onPress={() => {}}
        label="Login"
        fill={true}
        style={styles.buttonContainer}
      />
      <ButtonPrimary
        onPress={() => {
          navigation.navigate('Signup' as never);
        }}
        label="Signup"
        fill={false}
        style={styles.buttonContainer}
      />
    </View>
  );
};

export default LoginForm;
