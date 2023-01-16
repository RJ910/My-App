import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from "./Screens/HomeScreen";
import TroubleshootScreen from "./Screens/TroubleshootScreen";

import firebase from 'firebase';
import{firebaseConfig} from './assets/config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  TroubleshootScreen : TroubleshootScreen
  
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator />
  )
}
