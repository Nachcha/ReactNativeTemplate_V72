import {Dimensions, StyleSheet, Switch} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFFFFF',
    text: '#1E1E1E',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0, 0, 0, 0.1)',
};

type Theme = 'dark' | 'light';

const InterpolateColors: React.FC = () => {
  const [theme, setTheme] = React.useState<Theme>('light');

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const reanimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const reanimatedCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const reanimatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text],
    );
    return {
      color: color,
    };
  });

  return (
    <Animated.View style={[styles.container, reanimatedStyle]}>
      <Animated.Text style={[styles.text, reanimatedTextStyle]}>
        THEME
      </Animated.Text>
      <Animated.View style={[styles.circle, reanimatedCircleStyle]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggled => setTheme(toggled ? 'dark' : 'light')}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={'violet'}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default InterpolateColors;

const {width} = Dimensions.get('window');

const SIZE = width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  text: {
    fontSize: 70,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 14,
    marginBottom: 35,
  },
});
