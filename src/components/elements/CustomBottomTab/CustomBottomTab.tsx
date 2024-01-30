import {View} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {interpolatePath} from 'react-native-redash';
import {SCREEN_WIDTH} from '../../../utils/dimentions/RefDimentions';
import usePath from '../../../utils/hooks/usePath';
import {getPathXCenter} from '../../../utils/dimentions/Path';
import TabItem from './TabItem/TabItem';
import AnimatedCircle from './AnimatedCircle/AnimatedCircle';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styles from './styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const CustomBottomTab: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {containerPath, curvedPaths, tHeight} = usePath();
  const circleXCoordinate = useSharedValue(0);
  const progress = useSharedValue(1);

  const handleMoveCircle = (currentPath: string) => {
    circleXCoordinate.value = getPathXCenter(currentPath);
  };

  const selectIcon = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return 'home';
      case 'Profile':
        return 'user';
      case 'Settings':
        return 'settings';
      case 'About':
        return 'info';
      case 'Analytics':
        return 'bar-chart';
      default:
        return 'home';
    }
  };

  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({length: curvedPaths.length}, (_, index) => index + 1),
      curvedPaths,
    );
    runOnJS(handleMoveCircle)(currentPath);
    return {d: `${containerPath} ${currentPath}`};
  });

  const handleTabPress = (index: number, tab: string) => {
    navigation.navigate(tab);
    progress.value = withTiming(index);
  };

  return (
    <View style={styles.tabBarContainer}>
      <Svg width={SCREEN_WIDTH} height={tHeight} style={styles.shadowMd}>
        <AnimatedPath fill={'black'} animatedProps={animatedProps} />
      </Svg>
      <AnimatedCircle circleX={circleXCoordinate} />
      <View style={[styles.tabItemsContainer, {height: tHeight}]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel ? options.tabBarLabel : route.name;
          return (
            <TabItem
              key={index.toString()}
              label={label as string}
              icon={selectIcon(route.name)}
              activeIndex={state.index + 1}
              index={index}
              onTabPress={() => handleTabPress(index + 1, route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default CustomBottomTab;
