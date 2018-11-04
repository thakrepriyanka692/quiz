import { StyleSheet } from 'react-native';
import scale from '../../utils/scale';
import { WHITE_COLOR } from '../../utils/Const';

module.exports = StyleSheet.create({
  headerContainer: {
    height: scale(52),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    
  },
  settingsHeader: {
    flexDirection: 'row',
    backgroundColor: '#36153e',
    opacity: 1,
  },
  rightTitleContainerStyle: {
    //justifyContent: 'center',
    position: 'absolute',
    right: scale(15)
  },
  rightTitleStyle: {
    color: '#FF2D55',
    fontSize: scale(17)
  },
  leftIconStyle: {
   // justifyContent: 'center',
    position: 'absolute',
    padding: scale(15),
    left: 0
  },
  titleStyle: {
    position: 'absolute',
    color: '#D8D8D8',
    fontSize: scale(17)
  },
  arrow: {
    width: scale(9.97),
    height: scale(17.67)
  },
  settingsTitle: {
    alignSelf: 'center',
    color: WHITE_COLOR,
    fontFamily: 'lucidagrande'
  }
});
