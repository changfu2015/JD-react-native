/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Header from './Header'

export default class project extends Component {
  render() {
    return (
      <View style={styles.container}><Header/></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

AppRegistry.registerComponent('project', () => project);

