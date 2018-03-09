import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Gauge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    console.log('gauge')
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
