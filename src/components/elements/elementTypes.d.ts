import {
  ImageProps,
  ImageSourcePropType,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';

export interface IImageViewProps extends ImageProps {
  /**
   * local image source for placeholder if you have any image to show when onError triggers.
   */
  placeholder?: ImageSourcePropType;
}

export interface IDescriptionTextProps extends TextProps {}

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
