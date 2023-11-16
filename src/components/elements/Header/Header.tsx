import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface IHeaderProps extends PropsWithChildren {
  /**
   * Topic of the header
   */
  topic: string;
  /**
   * JSX Element for left button
   */
  leftButton?: JSX.Element;
}

const Header: React.FC<IHeaderProps> = ({topic, leftButton, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftButtonContainer}>{leftButton && leftButton}</View>
      <View style={styles.topicContainer}>
        <Text style={styles.topicText}>{topic}</Text>
      </View>
      <View style={styles.rightButtonsContainer}>{children}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1fd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtonContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginLeft: 15,
  },
  topicContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  rightButtonsContainer: {
    height: 50,
    paddingLeft: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topicText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
});
