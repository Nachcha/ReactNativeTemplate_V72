import {View, SafeAreaView, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import styles from './styles';

interface IScreenWithFooterAndHeaderProps extends PropsWithChildren {
  /**
   * JSX Element for header
   */
  header?: JSX.Element;
  /**
   * JSX Element for footer
   */
  footer?: JSX.Element;
  /**
   * Additional styles for outter container
   */
  style?: ViewStyle;
  /**
   * Additional styles for inner container
   */
  innerStyle?: ViewStyle;
}

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
