import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../utils/colors/Colors';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 76,
    alignSelf: 'center',
    backgroundColor: Colors.dark,
    alignItems: 'center',
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        height: 76,
        paddingBottom: 16,
      },
      android: {
        height: 60,
      },
    }),
  },
  tabBarAnimatedContainer: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Colors.dark,
    paddingHorizontal: 16,
    ...Platform.select({
      ios: {
        height: 76,
        paddingBottom: 16,
      },
      android: {
        height: 60,
      },
    }),
  },
  animatedView: {
    backgroundColor: Colors.septenary,
    height: 50,
    borderRadius: 100,
    zIndex: 0,
  },
  tabButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
});

export default styles;
