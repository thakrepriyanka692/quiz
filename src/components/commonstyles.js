import { StyleSheet } from 'react-native';
import scale, { verticalScale } from '../utils/scale';
import { STATUS_BAR_BACKGROUND_COLOR, fontFamily } from '../utils/Const';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: STATUS_BAR_BACKGROUND_COLOR
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    marginTop: scale(100),
  },
  accountHeading: {
    marginTop: verticalScale(80),
    alignItems: 'center',
  },
  signInContainers: {
    marginTop: verticalScale(22),
    paddingHorizontal: scale(20)
  },
  fontFamilySemiBold: {
  },
  fontFamilyMedium: {
  },
  noItemStyle: {
    fontSize: scale(15),
    opacity: 0.5,
    marginTop: scale(25),
  }
});
