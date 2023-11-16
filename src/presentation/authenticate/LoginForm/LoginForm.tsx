import {View, Text} from 'react-native';
import React from 'react';
import InputText from '../../../components/inputs/InputText/InputText';
import useFormState from './useFormState';

const LoginForm = () => {
  const {formState, handleFormState} = useFormState();

  return (
    <View>
      <Text>LoginForm</Text>
      <InputText
        value={formState.formData.email}
        onChangeText={text => {
          handleFormState({value: text, field: 'email', type: 'change'});
        }}
      />
      <InputText
        value={formState.formData.password}
        onChangeText={text => {
          handleFormState({value: text, field: 'password', type: 'change'});
        }}
        secureTextEntry={formState.formValidation.password.isSecured}
      />
    </View>
  );
};

export default LoginForm;
