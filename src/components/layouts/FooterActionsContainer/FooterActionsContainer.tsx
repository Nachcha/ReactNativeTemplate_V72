import {View} from 'react-native';
import React from 'react';
import {IFooterActionsContainerProps} from '../layouts';
import styles from './styles';

const FooterActionsContainer: React.FC<IFooterActionsContainerProps> = ({
  children,
}) => {
  return <View style={styles.container}>{children}</View>;
};

export default FooterActionsContainer;
