import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Todos from './Todos';



export default class App extends Component<{}> {
  today() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    return `${year}年${month}月${day}日`;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text>{ this.today() + 'のTodo' }</Text>
        </View>
        <View style={styles.gaugeContainer}>
          <Text>gauge</Text>
        </View>
        <View style={styles.todosContainer}>
          <Todos></Todos>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  dateContainer: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeContainer: {
    flex: 1,
    backgroundColor: '#ff9966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todosContainer: {
    flex: 8,
    backgroundColor: '#ffcc99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
