import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class FlatListDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentRecord: [
                {
                    stud_id: 1,
                    stud_name: "Rahul Sharma",
                    stud_rollno: 101,
                    stud_course: "BCA",
                    stud_fees: 45678.45
                },
                {
                    stud_id: 2,
                    stud_name: "Raj Sharma",
                    stud_rollno: 102,
                    stud_course: "MCA",
                    stud_fees: 65678.45
                },
                {
                    stud_id: 3,
                    stud_name: "Vijay Kumar",
                    stud_rollno: 103,
                    stud_course: "BTech",
                    stud_fees: 55678.45
                },
                {
                    stud_id: 4,
                    stud_name: "Ankit Sharma",
                    stud_rollno: 104,
                    stud_course: "M.Tech",
                    stud_fees: 66678.45
                },
                {
                    stud_id: 5,
                    stud_name: "Mohit Sharma",
                    stud_rollno: 105,
                    stud_course: "BCom",
                    stud_fees: 35678.45
                },
            ],
            stud_name: "",
            stud_rollno: 0,
            stud_course: "",
            stud_fees: 0.0
        }
    }
    deleteRecord = (gId) => {
        // console.log(gId)
        const newRecord = this.state.studentRecord.filter(item => item.stud_id !== gId)
        // console.log(newRecord)
        this.setState({
            studentRecord: newRecord
        })
    }

    insertRecord = () => {
        // console.log(name, rollno, course, fees)
        this.setState({
            studentRecord: [...this.state.studentRecord,
            {
                stud_id: Math.random(),
                stud_name: this.state.stud_name,
                stud_rollno: this.state.stud_rollno,
                stud_course: this.state.stud_course,
                stud_fees: this.state.stud_fees
            }]
        })
        console.log(this.state.studentRecord)
    }
    render() {
        return (
            <View>
                <Text style={{
                    fontSize: 32, backgroundColor: 'teal',
                    color: 'white', textAlign: 'center'
                }}>
                    FlatListDemo</Text>
                <TextInput
                    placeholder='Student Name'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            stud_name: e
                        })
                    }
                ></TextInput>
                <TextInput
                    placeholder='Student Rollno'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            stud_rollno: e
                        })
                    }
                ></TextInput>
                <TextInput
                    placeholder='Student Course'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            stud_course: e
                        })
                    }
                ></TextInput>
                <TextInput
                    placeholder='Student Fees'
                    style={styles.textInputStyle}
                    onChangeText={(e) =>
                        this.setState({
                            stud_fees: e
                        })
                    }
                ></TextInput>
                <TouchableOpacity
                    style={{
                        width: 160, height: 80,
                        backgroundColor: 'green', borderRadius: 10,
                        borderWidth: 2, borderColor: 'black', justifyContent: 'center'
                    }}
                    onPress={() => this.insertRecord()}
                >
                    <Text
                        style={{
                            fontSize: 28, fontWeight: 'bold', color: 'white',
                            textAlign: 'center'
                        }}>
                        INSERT</Text>
                </TouchableOpacity>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 200 }}
                    data={this.state.studentRecord}
                    renderItem={({ item, index }) =>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../FlexDemo/image/rohit-sharma.jpg')} />
                            <View style={{ flexDirection: 'column', margin: 10 }}>
                                <Text style={styles.titleText1}>{item.stud_name} </Text>
                                <Text style={styles.titleText2}>{item.stud_rollno} </Text>
                                <Text style={styles.titleText2}>{item.stud_course} </Text>
                                <Text style={styles.titleText2}>{item.stud_fees} </Text>
                                <TouchableOpacity
                                    style={{
                                        width: 160, height: 80,
                                        backgroundColor: 'red', borderRadius: 10,
                                        borderWidth: 2, borderColor: 'black', justifyContent: 'center'
                                    }}
                                    
                                    onPress={() => this.deleteRecord(item.stud_id)}
                                >
                                    <Text
                                        style={{
                                            fontSize: 28, fontWeight: 'bold', color: 'white',
                                            textAlign: 'center'
                                        }}>
                                        DELETE</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    }
                >
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: 'teal',
        color: 'white',
        fontSize: 26,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'white',
        margin: 10,
        textAlign: 'center',
    },
    addressText1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleText1: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    titleText2: {
        fontSize: 24,
    },
    tinyLogo1: {
        width: 80,
        height: 80,
        margin: 20,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        resizeMode: 'center',
        borderRadius: 15,
        backgroundColor: 'teal',
        margin: 10
    },
    tinyLogo: {
        width: 180,
        height: 180,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        // resizeMode: 'center',
        borderRadius: 15,
        backgroundColor: 'teal',
        margin: 10
    },
})




