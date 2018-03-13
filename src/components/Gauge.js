import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';

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
      <Progress.Bar progress={0.3} width={270} height={15} />
    );
  }
}

const styles = StyleSheet.create({
});
