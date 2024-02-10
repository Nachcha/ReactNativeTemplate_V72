import {Image} from 'react-native';
import React from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import {CommonStackParameterList} from '../../../navigation/types';
import Animated, {FadeInLeft, LightSpeedInLeft} from 'react-native-reanimated';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const Product: React.FC<
  NativeStackScreenProps<CommonStackParameterList, 'Product'>
> = ({route}) => {
  const {item} = route.params;
  console.log('!!! item details', item);
  return (
    <ScreenWithFooterAndHeader>
      <Image
        source={{uri: item.thumbnail}}
        style={{width: '100%', height: 300, resizeMode: 'contain'}}
      />
      <Animated.Text
        entering={LightSpeedInLeft.duration(500).delay(300)}
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 18,
          padding: 16,
        }}>{`${item.brand} ${item.category}`}</Animated.Text>
      <Animated.Text
        entering={FadeInLeft.duration(500).delay(600)}
        style={{
          color: 'black',
          fontSize: 18,
          padding: 16,
        }}>
        {item.description}
      </Animated.Text>
    </ScreenWithFooterAndHeader>
  );
};

export default Product;
