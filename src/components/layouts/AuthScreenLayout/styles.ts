import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../../utils/dimentions/refDimentions';
import Colors from '../../../utils/colors/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  footerContainer: {
    width: '100%',
    justifyContent: 'center',
    borderTopLeftRadius: getScaleNumber(30),
    borderTopRightRadius: getScaleNumber(30),
    backgroundColor: Colors.light,
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: getScaleNumber(20),
    alignItems: 'center',
  },
  keyboardAvoidingView: {
    width: '100%',
  },
});

export default styles;
