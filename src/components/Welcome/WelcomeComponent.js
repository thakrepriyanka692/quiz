/**
 * @author Systango Technologies
 * Date: Aug 2, 2018
 * Description: Signin Screen.
 *
 */
import React, {
  Component
} from 'react';


import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import resetRoute from '../../utils/resetRoute';
import styles from './style';
import * as CONST from '../../utils/Const';
import scale from '../../utils/scale';
import { getQuiz } from '../../utils/API';
import Spinner from '@components/Spinner'

export default class WelcomeContainer extends Component {

  constructor(props) {
    super(props);
  }

  spinner() {
    return (
      <Spinner />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.viewContainer}>
            <TouchableOpacity onPress={()=> this._startQuiz()}
              style={styles.start}>
              <Text style={styles.topText}>Start</Text>
            </TouchableOpacity>
          </View>
          {this.spinner()}
      </SafeAreaView>);
  }


  _startQuiz(){
    this.props.navigation.navigate('Quiz');
  }

}
