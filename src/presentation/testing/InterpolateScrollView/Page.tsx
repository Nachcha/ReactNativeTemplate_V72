import {Dimensions, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const SIZE = width * 0.7;

interface IPageProps {
  title: string;
  index: number;
  translateX: SharedValue<number>;
}

const Page: React.FC<IPageProps> = ({title, index, translateX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const reanimatedBoxStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolation.CLAMP,
    );
    return {
      borderRadius,
      transform: [{scale}],
    };
  });

  const reanimatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolation.CLAMP,
    );
    return {opacity, transform: [{translateY}]};
  });
  return (
    <View
      style={[
        styles.pageContainer,
        {
          width,
          backgroundColor: `rgba(0,0,255,0.${index + 2})`,
        },
      ]}>
      <Animated.View
        style={[
          styles.pageView,
          {
            width: SIZE,
            height: SIZE,
          },
          reanimatedBoxStyle,
        ]}>
        <Animated.Text style={[styles.pageTitle, reanimatedTextStyle]}>
          {title}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Page;
