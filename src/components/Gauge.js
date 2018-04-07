import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';

export default Gauge = (props) => {
  let progress;

  function calProgress (todos) {
    if(progress) return progress
    const doneCount = todos.filter((todo) => { return (todo.done) }).length
    progress = doneCount / 5
    return progress
  }

  function calColor (progress) {
    switch (progress) {
      case 0:
        return 'rgb(0,0,0)'
        break;
      case 0.2:
        return 'rgb(0,256,0)'
        break;
      case 0.4:
        return 'rgb(0,220,0)'
        break;
      case 0.6:
        return 'rgb(0,190,0)'
        break;
      case 0.8:
        return 'rgb(0,160,0)'
        break;
      case 1:
        return 'rgb(0,128,0)'
        break;
    }
  }

  return (
    <Progress.Bar progress={calProgress(props.todos)}
                  width={270}
                  height={15}
                  color={calColor(calProgress(props.todos))} />
  );
}

const styles = StyleSheet.create({
});
