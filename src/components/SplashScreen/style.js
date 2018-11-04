import { StyleSheet } from 'react-native';
import screen from '@utils/screen';
import * as CONST from '../../utils/Const';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONST.FB_BG,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: screen.WIDTH,
    height: screen.HEIGHT,
    position: 'absolute',
  },
  SplashImage: {
    flex: 1,
    width: null,
    height: null,
  }
});
