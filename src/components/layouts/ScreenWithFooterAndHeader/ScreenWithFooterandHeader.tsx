import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import {IScreenWithFooterAndHeaderProps} from '../layouts';

const ScreenWithFooterAndHeader: React.FC<IScreenWithFooterAndHeaderProps> = ({
  header,
  footer,
  children,
  style,
  innerStyle,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {/* Header Container */}
      {header && header}

      {/* Middle Container */}
      <View style={[styles.container, innerStyle]}>{children}</View>

      {/* Footer Container */}
      {footer && footer}
    </SafeAreaView>
  );
};

export default ScreenWithFooterAndHeader;
