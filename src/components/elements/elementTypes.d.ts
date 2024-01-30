import {
  ImageProps,
  ImageSourcePropType,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  PressableProps,
} from 'react-native';

//#region ImageView
export interface IImageViewProps extends ImageProps {
  /**
   * local image source for placeholder if you have any image to show when onError triggers.
   */
  placeholder?: ImageSourcePropType;
}
//#endregion

//#region DescriptionText
export interface IDescriptionTextProps extends TextProps {}
//#endregion

//#region PrimaryButton
export interface IButtonPrimaryProps extends TouchableOpacityProps {
  /**
   * button text
   */
  label?: string;
  /**
   * button container style
   */
  style?: ViewStyle;
  /**
   * button text style
   */
  textStyle?: TextStyle;
  /**
   * button fill type
   */
  fill?: boolean;
}
//#endregion

//#region CustomBottomTab
export interface IBottomTabIconProps {
  /**
   * Tab name
   */
  label: string;
  /**
   * Tab icon
   */
  icon: JSX.Element;
  /**
   * is the tab selected
   */
  focused: boolean;
  /**
   * Additional styles for label
   */
  labelStyle?: TextStyle;
  /**
   * Additional styles for container
   */
  style?: ViewStyle;
}

export type IconType =
  | 'Feather'
  | 'Ionicons'
  | 'FontAwesome'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Fontisto'
  | 'Foundation'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export type IconLibrary = {
  [key in IconType]: () => React.ComponentType<any>;
};

export type IconButtonProps = PressableProps & {
  /**
   * button icon
   */
  icon: string;
  /**
   * button icon family
   */
  iconFamily?: IconType;
  /**
   * button type
   */
  variant?: 'text' | 'contained' | 'outlined';
  /**
   * button size
   */
  size?: 'small' | 'medium' | 'big';
  /**
   * button icon color
   */
  iconColor?: string;
  /**
   * button roundness
   */
  roundness?: 'full' | 'medium' | 'small';
  /**
   * button additional styles
   */
  style?: StyleProp<ViewStyle>;
  /**
   * button press function
   */
  onPress?: () => void;
};

export type CircleProps = {
  /**
   * circle position on x axis
   */
  circleX: Animated.SharedValue<number>;
};

export type TabItemProps = {
  /**
   * tab label
   */
  label: string;
  /**
   * tab icon
   */
  icon: string;
  /**
   * tab index
   */
  index: number;
  /**
   * is the tab selected
   */
  activeIndex: number;
  /**
   * tab icon press function
   */
  onTabPress: (index: GestureResponderEvent) => void;
};
//#endregion
