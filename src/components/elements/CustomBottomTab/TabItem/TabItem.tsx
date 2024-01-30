import {Pressable, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {getPathXCenterByIndex} from '../../../../utils/dimentions/Path';
import usePath from '../../../../utils/hooks/usePath';
import {SCREEN_WIDTH} from '../../../../utils/dimentions/RefDimentions';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TabItemProps} from '../../elementTypes';

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 5;
const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const TabItem: React.FC<TabItemProps> = ({
  activeIndex,
  index,
  label,
  icon,
  onTabPress,
}) => {
  const {curvedPaths} = usePath();
  const animatedActiveIndex = useSharedValue(activeIndex);
  const iconPosition = getPathXCenterByIndex(curvedPaths, index);
  const labelPosition = getPathXCenterByIndex(curvedPaths, index);

  const tabStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? -18 : 20;
    const iconPositionX = iconPosition - index * ICON_SIZE;
    return {
      width: ICON_SIZE,
      height: ICON_SIZE,
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: iconPositionX - ICON_SIZE / 2},
      ],
    };
  });

  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = animatedActiveIndex.value - 1 === index ? 36 : 100;
    return {
      transform: [
        {translateY: withTiming(translateY)},
        {translateX: labelPosition - LABEL_WIDTH / 2},
      ],
    };
  });

  const iconColor = useSharedValue(
    activeIndex === index + 1 ? 'white' : 'rgba(128,128,128,0.8)',
  );

  useEffect(() => {
    animatedActiveIndex.value = activeIndex;
    if (activeIndex === index + 1) {
      iconColor.value = withTiming('white');
    } else {
      iconColor.value = withTiming('rgba(128,128,128,0.8)');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <Animated.View style={tabStyle}>
        <Pressable
          hitSlop={{top: 30, bottom: 30, left: 50, right: 50}}
          onPress={onTabPress}>
          <AnimatedIcon name={icon} size={ICON_SIZE} color={iconColor.value} />
        </Pressable>
      </Animated.View>
      <Animated.View style={[labelContainerStyle, styles.labelContainer]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    width: LABEL_WIDTH,
    alignItems: 'center',
  },
  label: {
    color: 'rgba(128,128,128,0.8)',
    fontSize: 17,
  },
});
