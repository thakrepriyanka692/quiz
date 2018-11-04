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
    justifyContent:'center',
    alignItems:'center',    
  },
  topText:{
    color:'white',
    fontSize: 22
  },
  start:{
    justifyContent:'center',
     alignItems:'center', 
     width:150, 
     height:150,
     backgroundColor: CLR.FB_BG,
      borderRadius:75}
});
