import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {Pressable, StyleProp, ViewStyle} from 'react-native';
import {IconButtonProps, IconLibrary} from '../../elementTypes';
import styles from './styles';

const IconLibrary: IconLibrary = {
  Feather: () => Feather,
  Ionicons: () => Ionicons,
  FontAwesome: () => FontAwesome,
  MaterialIcons: () => MaterialIcons,
  MaterialCommunityIcons: () => MaterialCommunityIcons,
  AntDesign: () => AntDesign,
  Entypo: () => Entypo,
  EvilIcons: () => EvilIcons,
  Fontisto: () => Fontisto,
  Foundation: () => Foundation,
  Octicons: () => Octicons,
  SimpleLineIcons: () => SimpleLineIcons,
  Zocial: () => Zocial,
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconFamily = 'Feather',
  variant = 'contained',
  size = 'medium',
  iconColor = 'white',
  roundness = 'medium',
  style = {},
  onPress,
  ...restProps
}) => {
  const Icon = IconLibrary[iconFamily]();
  const iconSize = size === 'big' ? 24 : size === 'medium' ? 16 : 12;
  const buttonSize = size === 'big' ? 50 : size === 'medium' ? 40 : 30;

  const buttonStyles = [
    styles.button,
    styles[`${variant}Button`],
    styles[`${roundness}Roundness`],
    {width: buttonSize, height: buttonSize},
    style,
  ] as StyleProp<ViewStyle>;
  return (
    <Pressable
      {...restProps}
      onPress={onPress}
      style={({pressed}) => [
        buttonStyles,
        pressed && styles.buttonPressed,
        pressed && styles.shadow,
      ]}>
      <Icon name={icon} size={iconSize} color={iconColor} />
    </Pressable>
  );
};

export default IconButton;
