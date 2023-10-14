import {ImageProps, ImageSourcePropType} from 'react-native';

export interface IImageViewProps extends ImageProps {
  placeholder?: ImageSourcePropType;
}
