import {StyleSheet} from 'react-native';
import Colors from '../../../utils/colors/Colors';
import {getScaleNumber} from '../../../utils/dimentions/refDimentions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: getScaleNumber(12),
    color: Colors.dark,
  },
  labelFocused: {
    fontSize: getScaleNumber(12),
    color: Colors.nonary,
  },
});

export default styles;
