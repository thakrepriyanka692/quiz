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
import WelcomeComponent from './WelcomeComponent';
import { getQuiz, startSpinner, stopSpinner } from '../../actions/commonAction';

class WelcomeContainer extends Component {

  constructor(props) {
    super(props);

    //* Get quiz data
    this.props.startSpin();
    this.props.getQuizAction();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isDataAvailable) {
      this.props.stopSpin();
    }
  }

  render() {
    return (
      <WelcomeComponent {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.commonReducer.isFetching,
    isDataAvailable: state.commonReducer.isDataAvailable
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuizAction: () => {
      dispatch(getQuiz());
    },
    startSpin: () => {
      dispatch(startSpinner());
    },
    stopSpin: () => {
      dispatch(stopSpinner());
    }
  };
};

WelcomeContainer.propTypes = {
  navigation: PropTypes.object,
  token: PropTypes.string,
  status: PropTypes.bool,
  message: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
