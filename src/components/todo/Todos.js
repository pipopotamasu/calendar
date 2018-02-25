import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import TodoItem from './TodoItem'

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ id: 1, text: 'test1', done: false }, { id: 2, text: 'test2', done: true }],
    };
  }

  _toggle = (index) => () => {
    const todos = [].concat(this.state.todos);
    todos[index].done = !todos[index].done;

    this.setState({
      todos,
    });
  }

  render() {
    const {
      todos,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.todoListContainer}>
            <FlatList
              style={styles.todoList}
              data={todos}
              keyExtractor={( item, index) => index}
              renderItem={({ item, index }) => (
                <TodoItem
                  onToggle={this._toggle(index)}
                  index={index}
                  {...item}
                />
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  todoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  todoList: {
    paddingLeft: 10,
    paddingRight: 10,
  }
});
