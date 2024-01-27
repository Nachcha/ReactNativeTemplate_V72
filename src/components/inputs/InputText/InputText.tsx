import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IInputTextProps} from '../inputTypes';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Colors from '../../../utils/colors/Colors';
import {getScaleNumber} from '../../../utils/dimentions/refDimentions';

const InputText: React.FC<IInputTextProps> = ({
  style,
  inputStyle,
  iconLeft,
  label,
  placeholder,
  secureTextEntry,
  isValid = true,
  errorText,
  ...restProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label || 'Label'}</Text>
      <View style={styles.inputContainer}>
        {iconLeft || (
          <IconFA name={'file-text-o'} size={getScaleNumber(24)} color="gray" />
        )}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder || 'Placeholder'}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...restProps}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer}>
            <IconFA
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={getScaleNumber(24)}
              color={Colors.senary}
            />
          </TouchableOpacity>
        )}
      </View>
      {!isValid && (
        <View style={styles.errorContainer}>
          <Text style={styles.comment}>{errorText || 'Error'}</Text>
        </View>
      )}
    </View>
  );
};

export default InputText;
