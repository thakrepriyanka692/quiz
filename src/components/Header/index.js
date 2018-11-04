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
  Image,
} from 'react-native';
import styles from './style';
import * as CONST from '../../utils/Const';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const {
      title, rightTitle, onRightClick, onCrossClick, settingsHeader, leftIcon
    } = this.props;
    let backgroundColorStyle = styles.headerContainer.backgroundColor;
    let iconSource = CONST.CROSS_WHITE;
    let headerTitle = title;
    if (settingsHeader) {
      backgroundColorStyle = styles.settingsHeader.backgroundColor;
      iconSource = leftIcon;
      headerTitle = title.toUpperCase();
    }
    return (
      <View style={[styles.headerContainer, { backgroundColor: backgroundColorStyle }]}>
        <Text style={[styles.titleStyle, settingsHeader && styles.settingsTitle]}>{headerTitle}</Text>
        <TouchableOpacity onPress={onRightClick} style={styles.rightTitleContainerStyle}><Text style={styles.rightTitleStyle}>{rightTitle}</Text></TouchableOpacity>
        <TouchableOpacity onPress={onCrossClick} style={styles.leftIconStyle}><Image source={iconSource} /></TouchableOpacity>
      </View>
    );
  }
}
