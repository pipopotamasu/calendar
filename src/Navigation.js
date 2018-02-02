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
import { TabNavigator } from 'react-navigation';
import HomeScreen from './components/Home';
import CalendarScreen from './components/Calendar';
import DiscriptionScreen from './components/Discription'


const RootTabs = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Calendar: {
      screen: CalendarScreen,
    },
    Discription: {
      screen: DiscriptionScreen,
    },
  },
  {
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
