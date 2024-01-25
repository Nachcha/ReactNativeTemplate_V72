import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtonContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginLeft: 10,
  },
  topicContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  rightButtonsContainer: {
    height: 50,
    paddingLeft: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topicText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
});

export default styles;
