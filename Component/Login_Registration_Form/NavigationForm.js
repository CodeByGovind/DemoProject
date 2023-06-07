// import { Text, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginForm } from './LoginForm';
import { RegistrationForm  } from './RegistrationForm';
import Deshboard from './Deshboard';
import TabBar from './TabBar';
import Drawer from './Drawer(sidemenu)';

//npm install @react-navigation/native-stack
//https://reactnavigation.org/docs/getting-started
const Stack = createNativeStackNavigator();

export default class NavigationForm extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RegistrationForm" component={RegistrationForm} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="Deshboard" component={Deshboard} />
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// //------------1st----------
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home Screen</Text>
//       {/* <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       /> */}
//       <TouchableOpacity
//         style={{ backgroundColor: 'teal' }}
//         onPress={() => navigation.navigate('Details')}
//       >
//         <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', margin: 10 }}>Next Screen</Text>

//       </TouchableOpacity>
//     </View>
//   );
// }

// //-----------------2nd-----------
// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Details Screen</Text>

//       <TouchableOpacity
//         style={{ backgroundColor: 'teal' }}
//         onPress={() => navigation.navigate('AboutUs')}
//       >
//         <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', margin: 10 }}>2nd Screen</Text>

//       </TouchableOpacity>
//     </View>
//   );
// }
// function AboutUsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold' }}>AboutThat Screen</Text>
//       <TouchableOpacity
//         style={{ backgroundColor: 'teal' }}
//         onPress={() => navigation.navigate('AboutThat')}
//       >
//         <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', margin: 10 }}>3rd Screen</Text>

//       </TouchableOpacity>
//     </View>
//   );
// }
// function AboutThatScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold' }}>AboutThat Screen</Text>

//     </View>
//   );
// }
