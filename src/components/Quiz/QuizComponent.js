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
import styles from './style';
import RadioGroup from '../RadioGroup/RadioButtonsGroup';

export default class QuizContainer extends Component {

  currentQuestionIndex= 0;
  constructor(props) {
    super(props);
    
    this.state = {
      timeConsumed: 0,
      questionsSet: []
    }
  }

  componentWillMount() {
    this.props.quizData.results.map((data)=> this.configureQuestion(data));
    this.quizTimer = setInterval(() => {
      this.setState({timeConsumed: this.state.timeConsumed + 1});
    }, 1000);
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
          <View style={{alignSelf: 'flex-end', marginTop: 20, marginRight: 20}}>
              <Text style={styles.queStyle}><Text style={[styles.queStyle, {fontWeight: 'bold'}]}>Time: </Text>{Number.parseInt(this.state.timeConsumed/60)}:{this.state.timeConsumed%60}</Text>
          </View>
          <View style={styles.viewContainer}>
              <Text style={styles.queStyle}><Text style={[styles.queStyle, {fontWeight: 'bold'}]}>Q.{this.currentQuestionIndex+1}</Text> {this.state.questionsSet[this.currentQuestionIndex].question}</Text>
              <RadioGroup radioButtons={this.state.questionsSet[this.currentQuestionIndex].options} onPress={(options)=> {
                const user_answer = options.filter((data) => {
                   return data.selected === true;
                });
                var currentQuestion = this.state.questionsSet[this.currentQuestionIndex];
                currentQuestion['userAnswer'] = user_answer[0].label;
                this.state.questionsSet[this.currentQuestionIndex] = currentQuestion;
              }} />
          </View>
          <View style={styles.btnContainer}>
            {this.currentQuestionIndex > 0 && this._renderPrevious()}
            <View style={{flex: 1}}/>
            {this.currentQuestionIndex < this.props.quizData.results.length - 1 && this._renderNext()}
            {this.currentQuestionIndex === this.props.quizData.results.length - 1 && this._renderFinish()}
          </View>
      </SafeAreaView>);
  }

  _renderPrevious(){
    return(
        <TouchableOpacity style={styles.btn} onPress={()=> {
          this.currentQuestionIndex--;
          this.forceUpdate();
        }}>
          <Text style={styles.txt}>Previous</Text>
        </TouchableOpacity>
    );
  }

  _renderNext(){
    return(
        <TouchableOpacity style={styles.btn} onPress={()=> {
          this.currentQuestionIndex++;
          this.forceUpdate();
        }}>
          <Text style={styles.txt}>Next</Text>
        </TouchableOpacity>
    );
  }

  _renderFinish(){
    return(
        <TouchableOpacity style={styles.btn} onPress={()=> {
          clearInterval(this.quizTimer);

          let correctAnswers = this.state.questionsSet.filter((data) => {
            return data.correctAnswer === data.userAnswer
          })
          this.props.navigation.navigate('QuizResultContainer', {timeConsumed: this.state.timeConsumed, result: correctAnswers.length, totalQuestions: this.state.questionsSet.length})
        }}>
          <Text style={styles.txt}>Finish</Text>
        </TouchableOpacity>
    );
  }

  configureQuestion(data) {
    let questionOptions = [];
    const randomIndex = Math.floor(Math.random() * data.incorrect_answers.length);
    data.incorrect_answers.map((data) => {
      questionOptions.push({label: data});
    });
    questionOptions.splice(randomIndex, 0, {label: data.correct_answer});
    this.state.questionsSet.push({question: data.question, options: questionOptions, userAnswer: questionOptions[0].label, correctAnswer: data.correct_answer});
  }

}
