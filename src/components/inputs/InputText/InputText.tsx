import {TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import {IInputTextProps} from '../inputTypes';

const InputText: React.FC<IInputTextProps> = ({style, ...restProps}) => {
  return (
    <React.Fragment>
      <TextInput style={[styles.input, style]} {...restProps} />
    </React.Fragment>
  );
};

export default InputText;
