import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../../../utils/dimentions/refDimentions';

const styles = StyleSheet.create({
  footerContainer: {width: '100%', paddingBottom: getScaleNumber(10)},
  buttonContainer: {marginVertical: getScaleNumber(10)},
});

export default styles;
