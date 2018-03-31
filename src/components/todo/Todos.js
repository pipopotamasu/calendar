import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import TodoItem from './TodoItem'

export default Todos = (props) => {
  const {
    todos,
    onToggle
  } = props;

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
                onToggle={onToggle(index)}
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
