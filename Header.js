/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Image,
  View
} from 'react-native';

export default class project extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    height: 48,
    // paddingTop: Platform.OS === 'ios' ? 20 : 0,
    // height: Platform.OS === 'ios' ? 68 : 48,
    backgroundColor: '#d74047',
    alignItems: 'center'
  }
});
