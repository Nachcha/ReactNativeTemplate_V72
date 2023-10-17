import {Text} from 'react-native';
import React from 'react';
import {IDescriptionTextProps} from '../elementTypes';
import styles from './styles';

const DescriptionText: React.FC<IDescriptionTextProps> = ({
  style,
  ...restProps
}) => {
  return (
    <React.Fragment>
      <Text style={[styles.text, style]} {...restProps}>
        DescriptionText
      </Text>
    </React.Fragment>
  );
};

export default DescriptionText;
