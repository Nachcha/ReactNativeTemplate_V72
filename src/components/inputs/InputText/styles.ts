import {StyleSheet} from 'react-native';
import {getScaleNumber} from '../../../utils/dimentions/refDimentions';
import Colors from '../../../utils/colors/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: getScaleNumber(5),
    marginBottom: getScaleNumber(20),
    width: '100%',
  },
  label: {
    marginBottom: getScaleNumber(2),
    fontSize: getScaleNumber(14),
    fontWeight: 'bold',
    color: Colors.black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: getScaleNumber(1),
    borderBottomColor: Colors.senary,
  },
  input: {
    flex: 1,
    height: getScaleNumber(40),
    fontSize: getScaleNumber(14),
    marginLeft: getScaleNumber(10),
    color: Colors.black,
  },
  iconContainer: {
    padding: getScaleNumber(5),
  },
  errorContainer: {
    position: 'absolute',
    left: getScaleNumber(10),
    bottom: getScaleNumber(-10),
    borderRadius: getScaleNumber(2),
    backgroundColor: Colors.nonary,
  },
  comment: {
    color: Colors.black,
    fontSize: getScaleNumber(12),
    fontWeight: 'normal',
    marginHorizontal: getScaleNumber(3),
    marginVertical: getScaleNumber(1),
  },
});

export default styles;
