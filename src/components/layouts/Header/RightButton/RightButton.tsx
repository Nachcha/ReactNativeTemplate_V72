import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {IRightButtonProps} from '../../layouts';

const RightButton: React.FC<IRightButtonProps> = ({
  children,
  iconColor,
  iconName,
  iconSize,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={styles.container} {...restProps}>
      {children || (
        <Icon
          name={iconName || 'hand-pointer-o'}
          size={iconSize || 30}
          color={iconColor || '#000000'}
        />
      )}
    </TouchableOpacity>
  );
};

export default RightButton;
