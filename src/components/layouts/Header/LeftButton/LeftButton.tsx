import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {ILeftButtonProps} from '../../layouts';

const LeftButton: React.FC<ILeftButtonProps> = ({
  children,
  iconColor,
  iconName,
  iconSize,
  ...restPrps
}) => {
  return (
    <TouchableOpacity style={styles.container} {...restPrps}>
      {children || (
        <Icon
          name={iconName || 'bars'}
          size={iconSize || 30}
          color={iconColor || '#000000'}
        />
      )}
    </TouchableOpacity>
  );
};

export default LeftButton;
