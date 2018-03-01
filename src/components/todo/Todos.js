import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import TodoItem from './TodoItem'
import Store from 'react-native-store';

const DB = {
  'todo': Store.model('todo')
}

const INITIAL_TODOS = [{ id: 1, text: 'test1', done: false, created_at: null },
                       { id: 2, text: 'test2', done: false, created_at: null },
                       { id: 3, text: 'test3', done: false, created_at: null },
                       { id: 4, text: 'test4', done: false, created_at: null },
                       { id: 5, text: 'test5', done: false, created_at: null }]

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: INITIAL_TODOS,
    };
  }

  async componentWillMount() {
    const today = this.props.today
    await DB.todo.destroy()

    const res = await DB.todo.find({
        where: {
            and: [{ todo: { created_at: today } }]
        },
        order: {
            id: 'ASC',
        }
    })

    // exist today's todos?
    if (res === null) {
      // register today's todos if not exists
      this.saveTodos(this.state.todos)
    } else {
      // fetch today's todos if exists
    }
  }

  saveTodos = (todos) => {
    todos.forEach(todo => {
      DB.todo.add(todo)
    })
  }

  _toggle = (index) => () => {
    console.log(DB.todo.find())
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
