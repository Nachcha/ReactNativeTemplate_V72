import React from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import ButtonPrimary from '../../../components/elements/ButtonPrimary/ButtonPrimary';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  AppStackParameterList,
  BottomTabStackParameterList,
} from '../../../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';

const About: React.FC<
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabStackParameterList, 'About'>,
    NativeStackScreenProps<AppStackParameterList>
  >
> = ({navigation}) => {
  return (
    <ScreenWithFooterAndHeader
      innerStyle={{alignItems: 'center', justifyContent: 'center'}}>
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Product List"
        onPress={() => {
          navigation.navigate('ProductList');
        }}
      />
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Basic Animation"
        onPress={() => {
          navigation.navigate('BasicAnimation');
        }}
      />
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Pan Guesture Handler"
        onPress={() => {
          navigation.navigate('PanGuestureHandler');
        }}
      />
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Interpolate ScrollView"
        onPress={() => {
          navigation.navigate('InterpolateScrollView');
        }}
      />
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Interpolate Colors"
        onPress={() => {
          navigation.navigate('InterpolateColors');
        }}
      />
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Pinch GestureHandler"
        onPress={() => {
          navigation.navigate('PinchGestureHandler');
        }}
      />
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Pinch GestureHandler"
        onPress={() => {
          navigation.navigate('PinchGestureHandler');
        }}
      />
    </ScreenWithFooterAndHeader>
  );
};

export default About;
