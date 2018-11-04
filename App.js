/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View} from 'react-native';
import { Provider } from 'react-redux';
import Spinner from '@components/Spinner'
import configureStore from './src/configureStore';
import AppRoot from './src/AppRoot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(() => {
        console.log('Store persisted !');
      }).store
    };
    console.disableYellowBox = true;
  }

   /* A loading indicator to show any process is under progress and UI can be blocked during that duration.
   */
  spinner() {
    return (
      <Spinner />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={this.state.store}>
          <View style={styles.container}>
            <AppRoot />
            {this.spinner()}
          </View>
        </Provider>
      </View>
    );
  }
}
// App = codePush(codePushOptions)(App);
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
