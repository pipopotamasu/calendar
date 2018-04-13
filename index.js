import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/Navigation';

class RootComponent extends Component {
  render() {
    return <App onNavigationStateChange={this.hoge}/>
  }

  hoge(prevState, currentState, action) {
    console.log(prevState)
    console.log('hoge')
  }
}

AppRegistry.registerComponent('calendar', () => RootComponent);
