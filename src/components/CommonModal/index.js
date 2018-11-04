/**
 * @author Systango Technologies
 * Date:
 * Description: Common Modal Screen !
 *
 */
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import styles from './style';
import scale from '../../utils/scale';

export default class CommonModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'M'
    };
  }

  componentDidMount() {

  }

  selectGender(value) {
    this.setState({
      gender: value,
    });
  }

  renderModalView() {
    const {
      gender,
    } = this.state;
    const {
      closeModal,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: scale(20) }}>
          <TouchableOpacity
            onPress={() => this.selectGender('U')}
            style={styles.genderContainer}
          >
            <Text style={[styles.genderTextStyle, gender == 'U' && styles.genderSelectedTextStyle]}>
Unspecified
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.selectGender('M')}
            style={styles.genderContainer}
          >
            <Text style={[styles.genderTextStyle, gender == 'M' && styles.genderSelectedTextStyle]}>
Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.selectGender('F')}
            style={styles.genderContainer}
          >
            <Text style={[styles.genderTextStyle, gender == 'F' && styles.genderSelectedTextStyle]}>
Female
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => { closeModal(gender); }}
            style={styles.OKContainer}
          >
            <Text style={styles.OKTextStyle}>
OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderValidationModal() {
    const {
      heading,
      description,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: scale(20) }}>
          <Text style={styles.validationHeading}>
            {heading}

          </Text>
          <Text style={styles.validationDescription}>
            {description}

          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => { this.closeModal(); }}
            style={styles.OKContainer}
          >
            <Text style={styles.OKTextStyle}>
OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const {
      isVisible,
    } = this.props;
    return (
      <View>
        <Modal
          animationIn="zoomIn"
          animationOut="zoomOut"
          isVisible={isVisible}
        >
          <View style={styles.modalContainer}>
            {this.renderModalView()}
            {/* {this.renderValidationModal()} */}
          </View>
        </Modal>
      </View>
    );
  }
}


CommonModal.propTypes = {
  configureTextObj: PropTypes.object,
  headingStyle: PropTypes.object,
  isVisible: PropTypes.bool,
  hidePremiumModal: PropTypes.func,
  navigation: PropTypes.object,
};
