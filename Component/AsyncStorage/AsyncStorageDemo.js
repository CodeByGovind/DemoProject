import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsynStorageDemo extends Component {

    storeData = async () => {
        try {
            const person = {
                name:"Rahul Sharma",
                age:23,
                address:"Indore M.P"
            }
            const jsonValue = JSON.stringify(person)
            await AsyncStorage.setItem('person',jsonValue)
            console.log("Data Store Successfully!!")
        } catch (e) {
            // saving error
            console.log("Saving Error:", e)
        }
    }

    getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('person')
            const p1 = JSON.parse(jsonValue)
            jsonValue != null ? console.log(p1.name,p1.age,p1.address) : console.log("Value not Found");
            
        } catch (e) {
            // error reading value
            console.log("Reading Error:", e)
        }
    //     AsyncStorage.getItem('person')
    //     .then((response)=>console.log(response))
    //     .catch((error)=>console.log(error))
    }
    removeData = async () => {
        try {
            await AsyncStorage.removeItem('person')
            console.log("Value Removed!!")
        } catch (e) {
            // error reading value
            console.log("Removed Error:", e)
        }
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
                    AsynStorageDemo
                </Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'teal' }}
                    onPress={() => this.storeData()}
                >
                    <Text style={{
                        fontSize: 32, color: 'white',
                        fontWeight: 'bold', textAlign: 'center'
                    }}>
                        StoreData
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'teal' }}
                    onPress={() => this.getData()}
                >
                    <Text style={{
                        fontSize: 32, color: 'white',
                        fontWeight: 'bold', textAlign: 'center'
                    }}>
                        ReadData
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'teal' }}
                    onPress={() => this.removeData()}
                >
                    <Text style={{
                        fontSize: 32, color: 'white',
                        fontWeight: 'bold', textAlign: 'center'
                    }}>
                        DeleteData
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
