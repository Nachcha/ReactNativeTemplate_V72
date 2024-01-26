import {TextInputProps, ViewStyle} from 'react-native';

export interface IInputTextProps extends TextInputProps {
  /**
   * text input style
   */
  inputStyle?: ViewStyle;
  /**
   * icon on the left of the input
   */
  iconLeft?: JSX.Element;
  /**
   * label of the button
   */
  label?: string;
  /**
   * placeholder of the input
   */
  placeholder?: string;
}

// export interface ISearchInputProps extends TextInputProps {}

// export interface IPasswordInputProps extends TextInputProps {}
