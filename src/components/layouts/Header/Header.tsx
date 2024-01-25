import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {IHeaderProps} from '../layouts';

const Header: React.FC<IHeaderProps> = ({
  children,
  containerStyle,
  leftButton,
  topic,
  topicStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.leftButtonContainer}>{leftButton && leftButton}</View>
      <View style={styles.topicContainer}>
        <Text style={[styles.topicText, topicStyle]}>{topic}</Text>
      </View>
      <View style={styles.rightButtonsContainer}>{children}</View>
    </View>
  );
};

export default Header;
