import { StyleSheet } from 'react-native';
import scale from '../../utils/scale';
import { BLACK_COLOR } from '../../utils/Const';

module.exports = StyleSheet.create({
  genderContainer: {
    paddingVertical: scale(10),
    borderBottomWidth: 1,
    borderColor: '#9B9B9B',
  },
  OKContainer: {
    paddingVertical: scale(10),
  },
  genderTextStyle: {
    textAlign: 'center',
    color: '#9B9B9B',
    fontSize: scale(13),
  },
  validationHeading: {
    textAlign: 'center',
    fontSize: scale(17),
  },
  validationDescription: {
    textAlign: 'center',
    fontSize: scale(13),
  },
  genderSelectedTextStyle: {
    fontWeight: 'bold',
    color: BLACK_COLOR,
  },
  OKTextStyle: {
    textAlign: 'center',
    color: '#007AFF',
    fontSize: scale(17),
  }
});
