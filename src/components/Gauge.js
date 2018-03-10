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
      // todos: [],
    };
  }

  componentDidUpdate() {
    console.log(this.props.todos)
  }

  render() {
    return (
      <Text>gauge</Text>
    );
  }
}

const styles = StyleSheet.create({
});
