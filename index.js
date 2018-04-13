import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/Navigation';

class RootComponent extends Component {
  render() {
    return <App onNavigationStateChange={this.onNavigationStateChange}/>
  }

  onNavigationStateChange(prevState, currentState, action) {
    if(action.routeName == 'Calendar') {
      console.log(1)
    }
  }
}

AppRegistry.registerComponent('calendar', () => RootComponent);
