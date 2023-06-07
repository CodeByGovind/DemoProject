import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, Button, Number, password, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker'


export default class Userinterface extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Hello",
            sItem: "Grocery",
            price: "5000",
            city: "kanpur",
            selectedcloth: "",
            selectedLanguage: "",
            date: new Date(),
            empStatus: false,
            empMarritalStatus: "YES",
        };
    }

    allData = () => {
        console.log(this.state.empName)
    }
    Add = (gId) => {
        // console.log(gId)
        const newRecord = this.state.studentRecord.filter(item => item.stud_id === gId)
        // console.log(newRecord)
        this.setState({
            studentRecord: newRecord
        })
    }

    deleteRecord = (gId) => {
        // console.log(gId)
        const newRecord = this.state.studentRecord.filter(item => item.stud_id !== gId)
        // console.log(newRecord)
        this.setState({
            studentRecord: newRecord
        })
    }




    render() {
        const { date } = this.state;
        return (
            <ScrollView>

                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    {/* //  input View */}

                    <View>
                        <Text style={styles.headerTitle1}>Add Question</Text>
                        <TextInput
                            style={{ backgroundColor: 'silver', margin: 5, fontSize: 28, borderRadius: 0, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', fontWeight: "500", width: '90%', marginLeft: 20 }}
                            placeholder='  Survey Title '
                            // ---------------------------
                            onChangeText={(e) =>
                                this.setState(() => ({
                                    userName: e
                                }))
                            }
                        />
                        <TextInput
                            style={{ backgroundColor: 'silver', margin: 5, fontSize: 28, borderRadius: 0, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', fontWeight: "500", width: '90%', marginLeft: 20 }}
                            placeholder='  Question Title '
                            // ---------------------------
                            onChangeText={(e) =>
                                this.setState(() => ({
                                    userName: e
                                }))
                            }
                        />
                    </View>
                    {/* //  input View */}
                    <View style={{ borderColor: 'black', backgroundColor: 'silver', borderWidth: 2, width: '90%', height: 50, marginLeft: 20, marginTop: 10, flexDirection: 'row' }}>
                        {/* <Text style={styles.headerTitle2a}>  Answer Type :</Text> */}
                        <Picker
                            style={{ color: 'black', width: '100%', alignContent: 'center', alignItems: 'center' }}
                            selectedValue={this.state.selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({
                                    selectedLanguage: itemValue
                                })
                            }>
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label=" Answer Type" value="jb" />
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label="None" value="jb" />
                            <TextInput
                                style={{ backgroundColor: 'silver', margin: 5, fontSize: 28, borderRadius: 0, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', fontWeight: "500", width: '90%', marginLeft: 20 }}
                                placeholder='  Question Title '
                                // ---------------------------
                                onChangeText={(e) =>
                                    this.setState(() => ({
                                        userName: e
                                    }))
                                }
                            />
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label="Text" value="jc" />
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label="Number" value="jd" />
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label="TextArea" value="je" />
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label="Radio" value="je" />
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label="Checkbox" value="je" />
                            <Picker.Item style={{ fontSize: 20, fontWeight: 'bold' }} label="slider" value="je" />

                        </Picker>
                    </View>


                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, marginTop: 20 }}>
                        <TouchableOpacity
                            style={{
                                width: 160, height: 60, marginLeft: 30,
                                backgroundColor: 'green', borderRadius: 10,
                                borderWidth: 2, borderColor: 'black', justifyContent: 'center'
                            }}
                            onPress={() => this.deleteRecord(item.stud_id)}
                        >
                            <Text
                                style={{
                                    fontSize: 28, fontWeight: 'bold', color: 'white',
                                    textAlign: 'center'
                                }}>
                                Submit</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            style={{
                                width: 160, height: 60, marginLeft: 30,
                                backgroundColor: 'red', borderRadius: 10,
                                borderWidth: 2, borderColor: 'black', justifyContent: 'center'
                            }}
                            onPress={() => this.deleteRecord(item.stud_id)}
                        >
                            <Text
                                style={{
                                    fontSize: 28, fontWeight: 'bold', color: 'red',
                                    textAlign: 'center'
                                }}>
                                (-) </Text>
                        </TouchableOpacity> */}
                    </View>


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    headerTitle1: {
        fontSize: 32,
        fontWeight: 'bold',
        backgroundColor: 'silver',
        textAlign: 'center',
        color: 'black',
        margin: 25,
        padding: 2

    },
    headerTitle2: {
        fontSize: 30,
        // fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        // margin: 10,
        paddingLeft: 25,
        paddingTop: 7
    },

    headerTitle2a: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        marginTop: 5
    },
    headerTitle3: {
        fontSize: 20,
        // fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        marginTop: 10,
    },
    TextInput: {

        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
    },
    TextInput1: {

        fontSize: 20,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
    },

    tinyLogo1: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 100,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain'
        resizeMode: 'cover',
        // resizeMode: 'repeat'
        // resizeMode: 'center',

    },

    tinyLogo2: {
        // alignSelf: 'center',
        width: 80,
        height: 60,
        // margin: 8,
        // borderRadius: 100,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain'
        resizeMode: 'cover',
        // resizeMode: 'repeat'
        // resizeMode: 'center',

    }


})
