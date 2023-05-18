/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import SeeALL from './screens/SeeALL';
import {Context} from './Context';

function App() {
  const Navigation = createNativeStackNavigator();
  return (
    // <Context>
    <Context>
      <NavigationContainer>
        <Navigation.Navigator screenOptions={{headerShown: false}}>
          <Navigation.Screen
            name="Home"
            component={HomePage}></Navigation.Screen>
          <Navigation.Screen
            name="seeall"
            component={SeeALL}></Navigation.Screen>
        </Navigation.Navigator>
      </NavigationContainer>
    </Context>
  );
}

export default App;
