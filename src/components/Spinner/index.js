/**
 * @author Systango Technologies
 * Date: Aug 2, 2018
 * Description: Global Spinner (loader)
 *
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './style';

const SpinnerEmt = require('react-native-spinkit');

class Spinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isFetching) {
      return null;
    }
    return (
      <View style={styles.spinnerContainer}>
      <SpinnerEmt
          style={styles.spinner}
          size={100}
          type="Wave"
          color="#b7b3b3"
        />
       </View>
    );
  }
}
function mapStateToProps(state) {
  const { commonReducer } = state;
  return {
    isFetching: commonReducer.isFetching
  };
}

Spinner.propTypes = {
  isFetching: PropTypes.bool
};

export default connect(mapStateToProps)(Spinner);
