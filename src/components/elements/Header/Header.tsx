import {Text, TextStyle, View, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import styles from './styles';

interface IHeaderProps extends PropsWithChildren {
  /**
   * Styles for container
   */
  containerStyle?: ViewStyle;
  /**
   * JSX Element for left button
   */
  leftButton?: JSX.Element;
  /**
   * Topic of the header
   */
  topic: string;
  /**
   * Styles for topic
   */
  topicStyle?: TextStyle;
}

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
