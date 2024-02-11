import React from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import {AppStackParameterList} from '../../../navigation/types';
import Animated, {FadeInLeft, LightSpeedInLeft} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {transitionOne} from '../../../utils/animations/sharedTransition';
import styles from './styles';

const Product: React.FC<
  NativeStackScreenProps<AppStackParameterList, 'Product'>
> = ({route}) => {
  const {item} = route.params;
  return (
    <ScreenWithFooterAndHeader>
      <Animated.Image
        // Shared transition tag Allows the transition to be shared animation between the two screens
        sharedTransitionTag={`product-${item.id}-image`}
        sharedTransitionStyle={transitionOne}
        source={{uri: item.thumbnail}}
        style={styles.image}
      />
      <Animated.Text
        entering={LightSpeedInLeft.duration(500).delay(300)}
        style={styles.topic}>{`${item.brand} ${item.category}`}</Animated.Text>
      <Animated.Text
        entering={FadeInLeft.duration(500).delay(600)}
        style={styles.description}>
        {item.description}
      </Animated.Text>
    </ScreenWithFooterAndHeader>
  );
};

export default Product;
