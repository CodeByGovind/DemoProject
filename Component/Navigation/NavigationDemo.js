import { Text, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//npm install @react-navigation/native-stack
//https://reactnavigation.org/docs/getting-started
const Stack = createNativeStackNavigator();

export default class NavigationDemo extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} />
          <Stack.Screen name="AboutThat" component={AboutThatScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

//------------1st----------
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      <TouchableOpacity
        style={{ backgroundColor: 'teal' }}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', margin: 10 }}>Next Screen</Text>

      </TouchableOpacity>
    </View>
  );
}

//-----------------2nd-----------
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Details Screen</Text>

      <TouchableOpacity
        style={{ backgroundColor: 'teal' }}
        onPress={() => navigation.navigate('AboutUs')}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', margin: 10 }}>2nd Screen</Text>

      </TouchableOpacity>
    </View>
  );
}
function AboutUsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>AboutThat Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'teal' }}
        onPress={() => navigation.navigate('AboutThat')}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', margin: 10 }}>3rd Screen</Text>

      </TouchableOpacity>
    </View>
  );
}
function AboutThatScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>AboutThat Screen</Text>

    </View>
  );
}
