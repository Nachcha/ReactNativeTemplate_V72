import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../../../utils/dimentions/refDimentions';
import Colors from '../../../../utils/colors/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: getScaleNumber(40),
    fontWeight: 'bold',
    color: Colors.dark,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: getScaleNumber(250),
  },
});

export default styles;
