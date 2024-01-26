import {PropsWithChildren} from 'react';
import {TouchableOpacityProps, ViewStyle, TextStyle} from 'react-native';
import {FontAwasomeIconName} from '@types/react-native-vector-icons/FontAwesome';

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

export interface ILeftButtonProps
  extends TouchableOpacityProps,
    PropsWithChildren {
  iconName?: FontAwasomeIconName;
  iconSize?: number;
  iconColor?: string;
}
export interface IRightButtonProps
  extends TouchableOpacityProps,
    PropsWithChildren {
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
}
export interface IScreenWithFooterAndHeaderProps extends PropsWithChildren {
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

export interface IFooterActionsContainerProps extends PropsWithChildren {}

export interface IAuthScreenLayout {
  /**
   * JSX Element for header
   */
  header: JSX.Element;
  /**
   * JSX Element for footer
   */
  footer: JSX.Element;
  /**
   * Additional styles
   */
  style?: ViewStyle;
  /**
   * Additional styles for header container
   */
  headerContainerStyle?: ViewStyle;
  /**
   * Additional styles for footer container
   */
  footerContainerStyle?: ViewStyle;
  /**
   * Additional styles for inner container
   */
  innerContainerStyle?: ViewStyle;
}
