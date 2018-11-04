/**
 * @author Systango Technologies
 * Date: Aug 2, 2018
 * Description: Splash Screen
 *
 */
import React, { Component } from 'react';
import {
  View, 
  Text
} from 'react-native';
import {
  connect
} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styles from './style';
import resetRoute from '../../utils/resetRoute';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    setTimeout(() => {
      resetRoute('WelcomeContainer', this.props.navigation);
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: 'white'}}>QUIZ</Text>
      </View>
    );
  }
}
function mapStateToProps() {
  return {
  };
}

const mapDispatchToProps = () => {
  return {
  };
};

SplashScreen.propTypes = {
  navigation: PropTypes.object,
  createDevice: PropTypes.func,
  status: PropTypes.bool,
  message: PropTypes.string,
  redirect_to: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
