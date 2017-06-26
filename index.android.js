/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Index from "./Index";
import Header from './Header';
import TabBar from './TabBar';
import Classify from "./Classify";

export default class myProject extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <Header/>
       
        <TabBar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }

});

const App = StackNavigator({
  Home :{screen: HomeScreen}
})

AppRegistry.registerComponent('myProject', () => myProject);