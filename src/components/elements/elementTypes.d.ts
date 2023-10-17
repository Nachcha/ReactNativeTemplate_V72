import {ImageProps, ImageSourcePropType, TextProps} from 'react-native';

export interface IImageViewProps extends ImageProps {
  /**
   * local image source for placeholder if you have any image to show when onError triggers.
   */
  placeholder?: ImageSourcePropType;
}

export interface IDescriptionTextProps extends TextProps {}
