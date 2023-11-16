import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface IFooterActionsContainerProps extends PropsWithChildren {}

const FooterActionsContainer: React.FC<IFooterActionsContainerProps> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};

export default FooterActionsContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#dfe',
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
