import {ActivityIndicator, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IImageViewProps} from '../elementTypes';
import Colors from '../../../utils/colors/Colors';

const ImageView: React.FunctionComponent<IImageViewProps> = ({
  style,
  source,
  onLoadEnd,
  ...restProps
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoadEndHandler = () => {
    setIsLoading(false);
    onLoadEnd && onLoadEnd();
  };

  return (
    <React.Fragment>
      <Image
        style={[styles.image, style]}
        source={source}
        onLoadEnd={onLoadEndHandler}
        {...restProps}
      />
      {isLoading && <ActivityIndicator size="small" color={Colors.gray} />}
    </React.Fragment>
  );
};

export default ImageView;
