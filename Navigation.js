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
import HomeScreen from './src/components/Home';

const CalendarScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
    <Text style={{ color: 'white' }}>Calendar Screen</Text>
  </View>
);

const DiscriptionScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333' }}>
    <Text style={{ color: 'white' }}>Discription Screen</Text>
  </View>
);

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
