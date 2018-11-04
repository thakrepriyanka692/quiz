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
  connect
} from 'react-redux';


import PropTypes from 'prop-types';
import { startSpinner, stopSpinner, getQuiz } from '../../actions/commonAction';
import QuizResultComponent from './QuizResultComponent';

class QuizResultContainer extends Component {

  render() {
    return (
      <QuizResultComponent {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    quizData: state.commonReducer.quizData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    startSpin: () => {
      dispatch(startSpinner());
    },
    stopSpin: () => {
      dispatch(stopSpinner());
    },
    getQuizAction: () => {
      dispatch(getQuiz());
    },
  };
};

QuizResultContainer.propTypes = {
  navigation: PropTypes.object,
  token: PropTypes.string,
  status: PropTypes.bool,
  message: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizResultContainer);
