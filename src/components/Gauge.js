import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';

export default Gauge = (props) => {
  function calProgress (todos) {
    const doneCount = todos.filter((todo) => { return (todo.done) }).length
    return doneCount / 5
  }

  return (
    <Progress.Bar progress={calProgress(props.todos)} width={270} height={15} />
  );
}

const styles = StyleSheet.create({
});
