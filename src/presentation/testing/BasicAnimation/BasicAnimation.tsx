/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import {AppStackParameterList} from '../../../navigation/types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';

const SIZE = 100;

const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};

const BasicAnimation: React.FC<
  NativeStackScreenProps<AppStackParameterList, 'BasicAnimation'>
> = ({}) => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{scale: scale.value}, {rotate: handleRotation(progress)}],
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <ScreenWithFooterAndHeader innerStyle={styles.container}>
      <Animated.View style={[styles.box, reanimatedStyle]} />
    </ScreenWithFooterAndHeader>
  );
};

export default BasicAnimation;
