import * as React from 'react';
import {react, useEffect} from "react";
// import { View, Image, StyleSheet, Button,Text,ImageBackground,StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Splash';
import Login from '../login';
import Signup from  '../signup';
import Bottomtab from './Bottomtab';
import Setting from '../setting';
import Account from '../setting/account';
import Notification from '../setting/notification';
import Appearence from '../setting/appearence';
import Privacy from '../setting/privacy';
import Helpsupport from '../setting/helpsupport';
import About from '../setting/about';
import Chat1 from '../BottomChat/chat';

const Stack = createNativeStackNavigator();
function App() {

  return (
   
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Bottomtab" component={Bottomtab} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Appearence" component={Appearence} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Helpsupport" component={Helpsupport} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Chat1" component={Chat1} />
       </Stack.Navigator>
  );
}

export default App;
