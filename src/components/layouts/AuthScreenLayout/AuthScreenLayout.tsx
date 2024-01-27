import {View, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import styles from './styles';
import {IAuthScreenLayout} from '../layouts';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScreenWithFooterAndHeader: React.FC<IAuthScreenLayout> = ({
  header,
  footer,
  style,
  headerContainerStyle,
  footerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView style={[styles.headerContainer, headerContainerStyle]}>
        <View style={[styles.innerContainer, innerContainerStyle]}>
          {header}
        </View>
      </SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={styles.keyboardAvoidingView}>
        <SafeAreaView style={[styles.footerContainer, footerContainerStyle]}>
          <View style={[styles.innerContainer, innerContainerStyle]}>
            {footer}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ScreenWithFooterAndHeader;
