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
      progress: 0
    }
  }

  calProgress (todos) {
    const doneCount = todos.filter((todo) => { return (todo.done) }).length
    return doneCount / 5
  }

  render() {
    return (
      <Progress.Bar progress={this.calProgress(this.props.todos)} width={270} height={15} />
    );
  }
}

const styles = StyleSheet.create({
});
