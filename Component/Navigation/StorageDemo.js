import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
//https://react-native-async-storage.github.io/async-storage/docs/install
//npm install @react-native-async-storage/async-storage
//npx react-native link @react-native-async-storage/async-storage
export default class StorageDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
            
        }
    }

    componentDidMount() {
        //using async await 
        this.getData()

        // using then() method
        // this.getData()
        //     .then((value) => {
        //         console.log("email:", value.uemail)
        //         console.log("password:", value.upassword)
        //         this.setState({
        //             email:value.uemail,
        //             password:value.upassword
        //         })
        //     })
    }

    setDetails = (email, password) => {
        // console.log(email, password)
        var details = {
            uemail: email,
            upassword: password
        }

        const storeData = async (details) => {
            try {
                const jsonValue = JSON.stringify(details)
                await AsyncStorage.setItem("getDetails", jsonValue)
                console.log("Saved Successfully!!!")
            }
            catch (e) {
                console.log("Error:", e)
            }
        }
        storeData(details)
    }


    getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('getDetails')
            let obj = JSON.parse(jsonValue)
            this.setState({
                email: obj.uemail,
                password: obj.upassword
            })

            // return JSON.parse(jsonValue)
            // return jsonValue != null ? console.log(JSON.parse(jsonValue)) : null;
        } catch (e) {
            // error reading value
            console.log("Error:", e)
        }
    }




    removeDetails = () => {
        const getData = async () => {
            try {
                //delete local storage data
                AsyncStorage.removeItem('getDetails')
                console.log("Deleted Successfully!!!")
            } catch (e) {
                // error reading value
                console.log("Error:", e)
            }
        }

        getData()

    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder='Enter a email'
                    style={{ fontSize: 32, backgroundColor: 'teal', color: 'white' }}
                    onChangeText={(data) => {
                        this.setState({
                            email: data
                        })
                    }}
                >
                </TextInput>
                <TextInput
                    placeholder='Enter a password'
                    style={{ fontSize: 32, backgroundColor: 'teal', color: 'white' }}
                    onChangeText={(data) => {
                        this.setState({
                            password: data
                        })
                    }}
                >
                </TextInput>
                <TouchableOpacity
                    style={{
                        width: 100, height: 60,
                        marginBottom: 10,
                        backmarginBottom: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
                    }}
                    onPress={() => this.setDetails(this.state.email, this.state.password)}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100, height: 60,
                        marginBottom: 10,
                        backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
                    }}
                    onPress={() => this.getDetails()}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>Get</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 100, height: 60,
                        marginBottom: 10,
                        backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'
                    }}
                    onPress={() => this.removeDetails()}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>Delete</Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 32, fontWeight: 'bold' }}>
                    {this.state.email}{"\n"}
                    {this.state.password}
                </Text>
            </View >
        )
    }
}

