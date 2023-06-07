import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const data = [
  {
    uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SuperFastDelivery_lmh0wh",
    text: 'Different types of ice cream'
  },
  {
    uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NorthIndian_u554zm",
    text: 'Different types of ice cream'
  },
  {
    uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy",
    text: 'Different types of ice cream'
  },
  {
    uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SuperFastDelivery_lmh0wh",
    text: 'Different types of ice cream'
  },
  {
    uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NorthIndian_u554zm",
    text: 'Different types of ice cream'
  },
  {
    uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy",
    text: 'Different types of ice cream'
  },

]
export default function React_native_Assignment() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="SecondMenu" component={SecondMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


function Homepage({ navigation }) {
  return (
    <View style={{ flex: 1, margin: 17 }}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item, index }) =>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SecondMenu')}>
              <Image source={{ uri: item.uri }}
                style={{ width: 325, height: 200, borderRadius: 20, margin: 15 }} />
            </TouchableOpacity>
          </View>
        } />
      <View style={{ flex: 18, }}>
        <FlatList
          data={data}
          renderItem={({ item, index }) =>
            <View style={{ flexDirection: 'row', margin: 5 }}>
              <TouchableOpacity onPress={() => navigation.navigate('SecondMenu')}>
                <Image source={{ uri: item.uri }}
                  style={{ width: 150, height: 150, borderRadius: 20, margin: 5 }} />
              </TouchableOpacity>
              <Text style={{ marginLeft: 28, fontSize: 25, fontWeight: '700', color: '#000', maxWidth: '45%', textAlign: 'center', marginTop: 20 }}>{item.text}</Text>
            </View>
          } />
      </View>
    </View>
  );
}
function SecondMenu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={data}
        renderItem={({ item, index }) =>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <TouchableOpacity onPress={() => navigation.navigate('SecondMenu')}>
              <Image source={{ uri: item.uri }}
                style={{ width: 150, height: 150, borderRadius: 20, margin: 5 }} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 28, fontSize: 25, fontWeight: '700', color: '#000', maxWidth: '45%', textAlign: 'center', marginTop: 20 }}>{item.text}</Text>
          </View>
        } />
    </View>
  )
}


