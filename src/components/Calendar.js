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
              [this.props.today]: { color: 'green' }
            }
          }
          markingType={'period'}
        />
      </View>
    );
  }
}
