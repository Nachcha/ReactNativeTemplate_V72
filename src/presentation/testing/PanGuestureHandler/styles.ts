import {StyleSheet} from 'react-native';

const SIZE = 100;
const RADIUS = SIZE * 1.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'tomato',
    borderRadius: 20,
  },
  circle: {
    width: RADIUS * 2 + SIZE,
    height: RADIUS * 2 + SIZE,
    borderRadius: RADIUS + SIZE * 0.5,
    borderWidth: 5,
    borderColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
