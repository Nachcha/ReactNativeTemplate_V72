import {StyleSheet} from 'react-native';
import React from 'react';
import {CircleProps} from '../../elementTypes';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const circleContainerSize = 50;

const AnimatedCircle: React.FC<CircleProps> = ({circleX}) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

export default AnimatedCircle;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -circleContainerSize / 1.7,
    width: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: circleContainerSize / 2,
  },
});
