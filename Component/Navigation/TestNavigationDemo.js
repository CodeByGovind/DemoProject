import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'
//npm install @react-navigation/native
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class AsyncNavigationDemo extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Home Screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      <TouchableOpacity
        style={{ backgroundColor: 'teal' }}
        onPress={() => navigation.navigate('Details', {
          stud_id: 101,
          stud_name: "Rahul Sharma",
          stud_course: "BCA",
          stud_fees: 45678.45
        })}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10 }}>
          Details
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Post: {route.params?.post}</Text>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Post1: {route.params?.post1}</Text>
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const { stud_id, stud_name, stud_course, stud_fees } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Details Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'teal' }}
        onPress={() => navigation.navigate('AboutUs')}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10 }}>
          AboutUs
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Id: {stud_id}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Name: {stud_name}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Course: {stud_course}</Text>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Fees: {stud_fees}</Text>
    </View>
  );
}

function AboutUsScreen({ navigation }) {
  const [postText, setPostText] = React.useState('');
  const [postText1, setPostText1] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>AboutUs Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ padding: 10, backgroundColor: 'white', fontSize: 30 }}
        value={postText}
        onChangeText={setPostText}
      />
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ padding: 10, backgroundColor: 'white', fontSize: 30 }}
        value={postText1}
        onChangeText={setPostText1}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText, post1: postText1 },
            merge: true,
          });
        }}
      />
    </View>
  );
}