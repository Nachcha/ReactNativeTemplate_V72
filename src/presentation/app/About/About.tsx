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
        label="Pan Responder"
        onPress={() => {}}
      />
      <ButtonPrimary
        style={{width: '70%', margin: 5}}
        label="Tap Responder"
        onPress={() => {}}
      />
    </ScreenWithFooterAndHeader>
  );
};

export default About;
