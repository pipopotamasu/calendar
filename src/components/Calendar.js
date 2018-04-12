import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Store from 'react-native-store';

const DB = {
  'todo': Store.model('todo')
}

export default class TodoCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos_group_by_day: {},
    };
  }

  async componentWillMount() {
    await this.fetchTodos()
  }

  async fetchTodos () {
    const today = new Date()
    const year = today.getFullYear()
    const month = ( "0" + ( today.getMonth() + 1 )).slice(-2)
    let todos_group_by_day = {}
    for(let i = 1; i <= 31; i++) {
      const day = ( '0' + i ).slice(-2)
      const fullYMD = `${year}-${month}-${day}`
      const res = await DB.todo.find({
        where: {
          created_at: fullYMD
        },
        order: {
          id: 'ASC',
        }
      })

      if (res) todos_group_by_day = Object.assign(todos_group_by_day, { [fullYMD]: res })
    }

    this.setState({
      todos_group_by_day: todos_group_by_day
    });
  }

  markedColorDates (todos_group_by_day) {
    let datesWithColor = {}
    for (let date in todos_group_by_day) {
      let progress = this.calProgress(todos_group_by_day[date])
      dateWithColor = { [date]: { color: this.calColor(progress) } }
      datesWithColor = Object.assign(datesWithColor, dateWithColor)
    }
    return datesWithColor
  }

  calProgress (todos) {
    // if(progress) return progress
    const doneCount = todos.filter((todo) => { return (todo.done) }).length
    progress = doneCount / 5
    return progress
  }

  calColor (progress) {
    switch (progress) {
      case 0:
        return 'rgb(255,255,255)'
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

  render() {
    const {
      todos_group_by_day
    } = this.state

    return (
      <View>
        <Calendar
          markedDates={
            this.markedColorDates(todos_group_by_day)
          }
          markingType={'period'}
        />
      </View>
    );
  }
}
