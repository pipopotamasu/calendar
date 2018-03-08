import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Store from 'react-native-store';

const DB = {
  'todo': Store.model('todo')
}

export default class Gauge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  render() {

    return (
      <View style={styles.gaugeContainer}>
        <Text>gauge</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    gaugeContainer: {
        flex: 1,
        backgroundColor: '#ff9966',
        alignItems: 'center',
        justifyContent: 'center',
        },
});
