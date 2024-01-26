import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../../../utils/dimentions/refDimentions';
import Colors from '../../../../utils/colors/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  topicText: {
    fontSize: getScaleNumber(40),
    fontWeight: 'bold',
    textAlign: 'left',
    color: Colors.dark,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: getScaleNumber(30),
  },
  button: {
    width: getScaleNumber(200),
  },
});

export default styles;
