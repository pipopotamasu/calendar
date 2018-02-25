import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from './Button';
import CheckBox from 'react-native-check-box'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 10,
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#333',
  },
  doneText: {
    textDecorationLine: 'line-through'
  },
  deleteButton: {
    backgroundColor: '#800000',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

const TodoItem = (props) => {
  const {
    text,
    done,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <CheckBox></CheckBox>
        <Button>
          {done? "Undo" : "Done"}
        </Button>
        <Text style={[styles.text, done && styles.doneText]} >{text}</Text>
      </View>
    </View>
  );
}

export default TodoItem;
