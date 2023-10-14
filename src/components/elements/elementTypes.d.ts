import {ImageProps, ImageSourcePropType} from 'react-native';

export interface IImageViewProps extends ImageProps {
  /**
   * local image source for placeholder if you have any image to show when onError triggers.
   */
  placeholder?: ImageSourcePropType;
}
