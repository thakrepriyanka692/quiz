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
  TouchableOpacity
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import styles from './style';

export default class QuizResultContainer extends Component {

  currentQuestionIndex= 0;
  constructor(props) {
    super(props);
    
     //* Get quiz data
     this.props.getQuizAction();

    this.state = {
      timeConsumed: 0,
      questionsSet: []
    }
  }

  render() {
    const { result, totalQuestions, timeConsumed } = this.props.navigation.state.params;
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.viewContainer}>
              <Text style={styles.queStyle}>Your Score: {result}/{totalQuestions}</Text>
              <Text style={styles.queStyle}>Total time taken: {Number.parseInt(timeConsumed/60)}:{timeConsumed%60}</Text>
              {this._renderRestart()}
          </View>
      </SafeAreaView>);
  }

  _renderRestart(){
    return(
        <TouchableOpacity style={styles.btn} onPress={()=> {
         
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Quiz' })
            ]
          });
          this.props.navigation.dispatch(resetAction);
        }}>
          <Text style={styles.txt}>Restart</Text>
        </TouchableOpacity>
    );
  }



}
