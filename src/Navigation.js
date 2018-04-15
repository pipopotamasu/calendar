/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from './components/Home';
import CalendarScreen from './components/Calendar';
import DiscriptionScreen from './components/Discription'

function today() {
  const today = new Date()
  const year = today.getFullYear()
  const month = ( "0" + ( today.getMonth() + 1 )).slice(-2)
  const day = ( "0" + today.getDate()).slice(-2)
  return `${year}-${month}-${day}`;
}

const customProps = { today: today() }

const RootTabs = TabNavigator(
  {
    Calendar: {
      screen: props => <CalendarScreen {...props} {...customProps} />
    },
    Home: {
      screen: props => <HomeScreen {...props} {...customProps} />
    },
    Discription: {
      screen: DiscriptionScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: navInfo => {
        console.log(navInfo)
        navInfo.jumpToIndex(navInfo.scene.index);
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    showIcon: 'true',
    tabBarOptions: {
      activeTintColor: '#ffffff',
      style: {
        backgroundColor: '#800000',
      },
      labelStyle: {
        fontSize: 14,
      },
    }
  },
);

export default RootTabs;
