import { StyleSheet, Platform, Dimensions } from 'react-native';
import scale, { verticalScale } from '../../utils/scale';
import * as CLR from '../../utils/Const';

const { height, width } = Dimensions.get('window');
module.exports = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer:{
    flex:1,
    padding:20,
    marginTop: 20
  },
  queStyle:{
    color:'black',
    fontSize:20,
    marginBottom: 30
  },
  btn: {backgroundColor: CLR.FB_BG, borderRadius:5, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, height: 40},
  txt: {color: CLR.WHITE_COLOR, fontWeight: 'bold', fontSize: 18},
  btnContainer: {flexDirection: 'row', height: 40, marginHorizontal: 20, marginBottom: 30}
});
