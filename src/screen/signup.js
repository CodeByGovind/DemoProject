import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Login from './login'
export default function Signup({navigation}) {
    // const setValue = (key, val) => {
    //     setData => {
    //         ...prevState(
    //             [key]: val
    //         )}
    // }
   
   
    const storeData = async () => {
        var ob = { name: 'name', email: 'email', pass: 'pass' }
        const [data, setData] = useState(ob)
        try {          
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('data', jsonValue)
            console.log("Data Store Successfully!!", data)
            Login("TextInput:", data)
            // navigation.navigator('Dashboard')
        } catch (e) {
            console.log("Saving Error:", e)
        }
    }

    const setValue = ( key, key_value ) => {
        setData(state => ({
            ...state[key] = key_value
        }))
    }

    // const storeData = async () => {
    //     try {
    //         const user = JSON.stringify(data)
    //         await AsyncStorage.setItem('data', user)
    //         Signup("TextInput:", data)
    //         console.log('@@storeData===>', data);
    //         console.log('@@user===>', user);

    //     } catch (error) {
    //         // Error saving data
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Sign Up</Text>
            <View>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Enter your name'
                    autoCapitalize='none'
                    autoCorrect={false}
                    // value={data.name}
                    onChangeText={(txt) => setValue(txt,'name')}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder='Enter your email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    // value={data.email}
                    onChangeText={(txt) => setValue(txt,'email')}
                />
                <TextInput
                    style={styles.TextInput}
                    placeholder='Enter your password'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    autoCorrect={false}
                    // value={data.pass}
                    onChangeText={(txt) => setValue(txt,'pass')}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {storeData(), navigation.navigate('Dashboard')}}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10

    },
    Text: {
        fontSize: 22,
        fontWeight: 'bold', color: '#000', textAlign: 'center'
    },
    TextInput: {
        fontSize: 18,
        width: '90%',
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'grey',
    },
    btnText: {
        fontSize: 22,
        fontWeight: 'bold', color: '#fff', textAlign: 'center'
    },
    btn: {
        width: '90%',
        // textAlign:'center',
        alignSelf: 'center',
        margin: 10,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'grey',
    },
    Text: {

    },
})