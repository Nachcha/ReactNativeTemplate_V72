import {StyleSheet} from 'react-native';
import Colors from '../../../utils/colors/Colors';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 76,
    alignSelf: 'center',
    backgroundColor: Colors.dark,
    alignItems: 'center',
  },
  tabBarContainerIOS: {
    paddingBottom: 16,
  },
  tabBarContainerAndroid: {},
  tabButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tabButtonContainerSelected: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(103, 58, 183, 0.1)',
  },
  tabIcon: {
    fontSize: 24,
    color: Colors.white,
  },
  tabIconSelected: {
    fontSize: 24,
    color: Colors.tertiary,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
    color: Colors.white,
  },
  tabLabelSelected: {
    fontSize: 10,
    marginTop: 4,
    color: Colors.tertiary,
  },
});

export default styles;
