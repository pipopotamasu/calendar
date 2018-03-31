import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Todos from './todo/Todos';
import Gauge from './Gauge';
import Store from 'react-native-store';

const DB = {
  'todo': Store.model('todo')
}

const INITIAL_TODOS = [{ id: 1, text: 'test1', done: false, created_at: null },
                       { id: 2, text: 'test2', done: false, created_at: null },
                       { id: 3, text: 'test3', done: false, created_at: null },
                       { id: 4, text: 'test4', done: false, created_at: null },
                       { id: 5, text: 'test5', done: false, created_at: null }]


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  async componentWillMount() {
    const res = await DB.todo.find({
        where: {
          created_at: this.today()
        },
        order: {
            id: 'ASC',
        }
    })

    // exist today's todos?
    if (res === null) {
      // register today's todos if not exists
      await this.saveTodos(this.state.todos)
      this.setState({todos: INITIAL_TODOS})
    } else {
      // fetch today's todos if exists
      this.setState({
        todos: res
      });
    }
  }

  async saveTodos(todos) {
    const today = this.props.today
    for(let i in INITIAL_TODOS) {
      await DB.todo.add(Object.assign(INITIAL_TODOS[i], { created_at: today }))
    }
  }

  async updateTodo(todo) {
    await DB.todo.updateById(todo, todo._id)
  }

  _toggle = (index) => () => {
    const todos = [].concat(this.state.todos);
    todos[index].done = !todos[index].done;

    this.updateTodo(todos[index])

    this.setState({
      todos,
    });
  }

  today() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    return `${year}-${month}-${day}`;
  }

  render() {
    const {
      todos
    } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <Text>{ this.today() + 'のTodo' }</Text>
        </View>
        <View style={styles.gaugeContainer}>
          <Gauge todos={todos}></Gauge>
        </View>
        <View style={styles.todosContainer}>
          <Todos
            todos={todos}
            onToggle={this._toggle}
          ></Todos>
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
