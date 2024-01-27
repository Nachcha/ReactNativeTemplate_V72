import {View, Text} from 'react-native';
import React from 'react';
import {IBottomTabIconProps} from '../elementTypes';
import styles from './styles';

const BottomTabIcon: React.FC<IBottomTabIconProps> = ({
  style,
  focused,
  icon,
  label,
  labelStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      {icon}
      <Text style={[focused ? styles.labelFocused : styles.label, labelStyle]}>
        {label}
      </Text>
    </View>
  );
};

export default BottomTabIcon;
