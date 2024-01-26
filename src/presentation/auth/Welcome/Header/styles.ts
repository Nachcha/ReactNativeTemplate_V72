import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../../../utils/dimentions/refDimentions';

const styles = StyleSheet.create({
  image: {
    width: getScaleNumber(300),
    height: getScaleNumber(300),
  },
});

export default styles;
