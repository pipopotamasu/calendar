import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Calendar } from 'react-native-calendars';

export default class TodoCalendar extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   todos: [],
    // };
  }

  render() {

    return (
      <View>
        <Calendar
          markedDates={
            {
             '2018-04-08': { color: 'green' }
            }
          }
          markingType={'period'}
        />
      </View>
    );
  }
}
