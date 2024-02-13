import React from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import {AppStackParameterList} from '../../../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import {View} from 'react-native';

const SIZE = 100;
const RADIUS = SIZE * 1.25;

const isInCircle = (
  e: GestureUpdateEvent<PanGestureHandlerEventPayload>,
): boolean => {
  'worklet';
  let distance = Math.sqrt(e.translationX ** 2 + e.translationY ** 2);
  return distance < RADIUS;
};

const BasicAnimation: React.FC<
  NativeStackScreenProps<AppStackParameterList, 'PanGuestureHandler'>
> = ({}) => {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({x: 0, y: 0});
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      if (isInCircle(e)) {
        offset.value = {
          x: e.translationX,
          y: e.translationY,
        };
      } else {
        offset.value = {
          x: RADIUS * Math.cos(Math.atan2(e.translationY, e.translationX)),
          y: RADIUS * Math.sin(Math.atan2(e.translationY, e.translationX)),
        };
      }
    })
    .onEnd(() => {
      offset.value = withSpring({
        x: 0,
        y: 0,
      });
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offset.value.x},
        {translateY: offset.value.y},
        {scale: withSpring(isPressed.value ? 1.2 : 1)},
      ],
      backgroundColor: isPressed.value ? 'orange' : 'tomato',
    };
  });

  return (
    <ScreenWithFooterAndHeader innerStyle={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </GestureDetector>
      </View>
    </ScreenWithFooterAndHeader>
  );
};

export default BasicAnimation;
