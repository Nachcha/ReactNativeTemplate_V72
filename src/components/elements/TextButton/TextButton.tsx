import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {IButtonPrimaryProps} from '../elementTypes';

const TextButton: React.FC<IButtonPrimaryProps> = ({
  style,
  textStyle,
  label,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...restProps}>
      <Text style={[styles.text, textStyle]}>{label || 'Click here...'}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
