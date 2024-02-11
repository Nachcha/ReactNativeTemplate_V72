import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWithFooterAndHeader from '../../../components/layouts/ScreenWithFooterAndHeader/ScreenWithFooterandHeader';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Header from '../../../components/layouts/Header/Header';
import LeftButton from '../../../components/layouts/Header/LeftButton/LeftButton';
import RightButton from '../../../components/layouts/Header/RightButton/RightButton';
import Colors from '../../../utils/colors/Colors';
import styles from './styles';
import productsData from '../../../utils/data/products.json';
import {AppStackParameterList} from '../../../navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {transitionOne} from '../../../utils/animations/sharedTransition';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const ProductList: React.FC<
  NativeStackScreenProps<AppStackParameterList, 'ProductList'>
> = ({navigation}) => {
  const width = useSharedValue(150);
  const height = useSharedValue(150);
  const backgroundColor = useSharedValue(Colors.senary);

  const startAnimation = () => {
    const randomWidth = Math.random() * 300;
    const randomHeight = Math.random() * 300;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;

    width.value = withSpring(randomWidth);
    height.value = withSpring(randomHeight);
    backgroundColor.value = withTiming(randomColor);
  };

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      backgroundColor: backgroundColor.value,
    };
  });

  const animatedTextInputStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <ScreenWithFooterAndHeader
      header={
        <Header topic="Header One" leftButton={<LeftButton />}>
          <RightButton onPress={startAnimation} />
          <RightButton />
          <RightButton />
        </Header>
      }>
      <ScrollView style={styles.container}>
        <AnimatedInput style={[animatedTextInputStyle, styles.textInput]} />
        <Animated.View style={animatedViewStyle} />

        {productsData.products.map((product, index) => {
          return (
            <View key={index} style={{padding: 10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Product', {item: product});
                }}>
                <Animated.Image
                  // Shared transition tag Allows the transition to be shared animation between the two screens
                  sharedTransitionTag={`product-${product.id}-image`}
                  sharedTransitionStyle={transitionOne}
                  source={{uri: product.thumbnail}}
                  style={{width: 200, height: 200}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </ScreenWithFooterAndHeader>
  );
};

export default ProductList;
