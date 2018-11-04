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
import { startSpinner, stopSpinner } from '../../actions/commonAction';
import QuizComponent from './QuizComponent';

class QuizContainer extends Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.isDataAvailable) {
      this.props.stopSpin();
    }
  }

  render() {
    return (
      <QuizComponent {...this.props} />
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
    }
  };
};

QuizContainer.propTypes = {
  navigation: PropTypes.object,
  token: PropTypes.string,
  status: PropTypes.bool,
  message: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
