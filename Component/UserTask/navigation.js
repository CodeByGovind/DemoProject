import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class Testa extends Component {
    render() {
        return (

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Homepage} />
                    <Stack.Screen name="Add" component={AddScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}