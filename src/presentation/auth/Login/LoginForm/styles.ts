import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../../../utils/dimentions/RefDimentions';

const styles = StyleSheet.create({
  footerContainer: {width: '100%', paddingBottom: getScaleNumber(10)},
  buttonContainer: {marginVertical: getScaleNumber(10)},
  forgotPasswordContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    marginBottom: getScaleNumber(15),
    marginTop: getScaleNumber(-10),
  },
});

export default styles;
