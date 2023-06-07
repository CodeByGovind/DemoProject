import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//npm install @react-navigation/native
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient'

import UserDetails from './UserDetails';
import CostomerLogin from './CostomerLogin';
import RegistrationScreen from './Registration';
const Stack = createNativeStackNavigator();

export default class LoginRegistr extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={CostomerLogin} />
                    <Stack.Screen name="HomePage" component={HomeScreen} />
                    <Stack.Screen name="Details " component={UserDetails} />
                    <Stack.Screen name="Registration" component={RegistrationScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
function HomeScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, }}>
            <LinearGradient
                colors={['#33ccff', '#ff99cc']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'black', fontSize: 28, textAlign: 'center' }}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => navigation.navigate('Registration', {
                    })}>
                    <Text style={{ color: 'black', fontSize: 28, textAlign: 'center' }}>
                        Registration
                    </Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: "black",
        justifyContent: 'center',
        margin: 20
    },
    loginBtn: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 4,
        borderRadius: 50,
        width: '90%',
        borderColor: 'black',
        marginTop: 20,
        padding: 16
    },
    container: {
        justifyContent: 'center', height: "100%"
    },

    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: "white",
        justifyContent: 'center',
        margin: 20
    },
    TextInput: {
        borderRadius: 10,
        margin: 20,
        borderWidth: 2,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25
    }
})