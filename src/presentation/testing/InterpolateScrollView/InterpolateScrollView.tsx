import React from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from './Page';
import styles from './styles';

const WORDS = ["What's", 'up', 'mobile', 'devs?'];

const InterpolateScrollView: React.FC = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <ScreenWithFooterAndHeader>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        contentContainerStyle={styles.animatedScroll}>
        {WORDS.map((word, index) => {
          return (
            <Page
              key={index}
              title={word}
              index={index}
              translateX={translateX}
            />
          );
        })}
      </Animated.ScrollView>
    </ScreenWithFooterAndHeader>
  );
};

export default InterpolateScrollView;
