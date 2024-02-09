import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import styles from './styles';
import VectorIcon from '../VectorIcon/VectorIcon';

const BottomTabBarOne: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={[
        styles.tabBarContainer,
        Platform.OS === 'ios'
          ? styles.tabBarContainerIOS
          : styles.tabBarContainerAndroid,
        descriptors.tabbarStyle,
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              isFocused
                ? styles.tabButtonContainerSelected
                : styles.tabButtonContainer,
              options.tabBarItemStyle,
            ]}>
            <VectorIcon
              type="MaterialIcons"
              name="rocket"
              style={[
                options.tabBarIconStyle,
                isFocused ? styles.tabIconSelected : styles.tabIcon,
              ]}
            />
            <Text
              style={[
                isFocused ? styles.tabLabelSelected : styles.tabLabel,
                options.tabBarLabelStyle,
              ]}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBarOne;
