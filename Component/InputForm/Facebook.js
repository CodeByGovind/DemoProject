import { Text, View, TextInput, TouchableOpacity, StyleSheet , ScrollView , Number, password, Button } from 'react-native'
import React, { Component, useState } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import DateTimePicker from '@react-native-community/datetimepicker';
import { types } from '@babel/core';

export default class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            surName: "",
            mobile_or_email: "",
            password: "",
            selectedSegmentIndex: "",
            empGender: "",
            date: new Date()


        };
    }


    allData = () => {
        console.log(this.state.empName)

    }
    showDatepicker = () => {
        this.showMode('date');
    };

    showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: this.state.date,
            onChange: (event, selectedDate) => {
                const currentDate = selectedDate;
                this.setState({
                    date: currentDate
                })
            },
            mode: currentMode,
            is24Hour: true
        })
    };

    render() {
        const { date } = this.state;
        return (
            <ScrollView>
            {/* // <View> 1st open */}
            <View>

                <Text style={styles.headerTitle1}>facebook</Text>

                {/* <View> 2nd open */}
                <View style={styles.headerTitle2}>
                    <Text style={styles.headerTitle2}>create a new account </Text>
                    <Text style={styles.headerTitle3}>it's quick and easy.</Text>
                    <View style={{ height: 2, width: '100%', backgroundColor: 'black', marginTop: 15, marginBottom: 15 }}></View>

                    <View style={{ fontSize: 8, alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: 210, margin: 2 }}>
                            <TextInput
                                style={{ margin: 5, fontSize: 20 }}
                                placeholder=' First name '
                                // ---------------------------
                                onChangeText={(e) =>
                                    this.setState(() => ({
                                        userName: e
                                    }))
                                }
                            />
                        </View>

                        <View style={{ borderRadius: 10, borderWidth: 2, borderColor: 'black', width: 210, margin: 2 }}>
                            <TextInput
                                style={{ margin: 5, fontSize: 20 }}
                                placeholder=' Surname '
                                onChangeText={(e) =>
                                    this.setState(() => ({
                                        LastName: e
                                    }))
                                }

                            />
                        </View>

                    </View>
                    <View style={styles.TextInput}>
                        <TextInput
                            style={{ margin: 5, fontSize: 20 }}
                            placeholder=' Mobile number or email address '
                            value={Number}
                            onChangeText={(e) =>
                                this.setState(() => ({
                                    mobile_or_email: e
                                }))
                            }
                        />
                    </View>

                    <View style={styles.TextInput}>
                        <TextInput
                            style={{ margin: 5, fontSize: 20 }}
                            placeholder=' New password '
                            value={password}
                            onChangeText={(e) =>
                                this.setState(() => ({
                                    password: e
                                }))
                            }

                        />
                    </View>
                    {/* -------------------------Date of birth open----------------- */}

                    <View>

                        <Text style={{ fontSize: 18, color: 'black', marginLeft: 20, marginTop: 5 }}>Date of birth (?)</Text>
                        {/* ------------------------------------------ */}

                        <View style={{ justifyContent: 'center', flexDirection: 'row', height: 80 }}>
                            {/* ------------------------------------------ */}

                            <View style={{
                                borderRadius: 10, borderWidth: 2, color: 'black',
                                borderColor: 'black', width: 130, margin: 5
                            }}>
                                <View>
                                    <Button onPress={() => this.showDatepicker()}
                                        title="Date        v" />
                                </View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 50 }}> {date.getDate()}</Text>

                            </View>
                            {/* ------------------------------------------ */}
                            <View style={{ borderRadius: 10, borderWidth: 2, borderColor: 'black', width: 130, margin: 5 }}>
                                <View>
                                    <Button onPress={() => this.showDatepicker()}
                                        title="month     v" />
                                </View>

                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 50 }}> {date.getMonth() + 1}</Text>

                            </View>
                            {/* ------------------------------ */}
                            <View style={{ borderRadius: 20, borderWidth: 2, borderColor: 'black', width: 130, margin: 5 }}>
                                <View>
                                    <Button onPress={() => this.showDatepicker()}
                                        title="year      v" />
                                </View>

                                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 30 }}> {date.getFullYear()}</Text>

                            </View>
                            {/* ------------------------------------------ */}
                        </View>

                    </View>

                    {/* ---------------------------------------------------- */}
                    {/* ----------viev close-------------------------------- */}
                    {/* gender-----------open */}
                    <View>
                        <Text style={{ fontSize: 18, color: 'black', marginLeft: 20, marginTop: 1}}>Gender(?)</Text>


                        <SegmentedControl style={{ backgroundColor: 'silver' }}
                            values={['Male', 'Female', 'Other']}
                            fontStyle={{ fontSize: 20 }}
                            selectedIndex={this.state.selectedIndex}
                            onChange={(event) => {
                                this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
                            }}
                            onValueChange={(value) => {
                                this.setState({
                                    empGender: value
                                })
                            }}
                        />
                        <Text style={styles.headerTitle3}>
                            {this.state.selectedSegmentIndex}{"\n"}
                            Gender is  :  {this.state.empGender}</Text>
                        {/* ------------------------------------------ */}
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: 5 }}> People who use our service may have uploaded your contact information to Facebook.<Text style={{ fontSize: 17, color: 'blue', margin: 5 }}>Learn more</Text></Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, color: 'black', marginTop: 5 }}> By clicking Sing Up, you agree to our<Text style={{ fontSize: 17, color: 'blue', margin: 5 }}>Terms, Data Policy</Text><Text style={{ fontSize: 17, color: 'black', marginTop: 5 }}>and</Text><Text style={{ fontSize: 17, color: 'blue', margin: 5 }}>Cookie Policy,</Text>
                            <Text style={{ fontSize: 17, color: 'black', marginTop: 5 }}>You may receive SMS notifications from us and can out at any time. </Text>
                        </Text>
                    </View>


                    <TouchableOpacity style={{
                        width: 170, height: 45, borderRadius: 10,
                        backgroundColor: "yellowgreen", borderWidth: 3, borderColor: "black", alignSelf: 'center'
                    }}

                        onPress={(() => setColor(color = 'black'))}>

                        <Text style={{ fontSize: 26, fontWeight: "bold", color: 'white', textAlign: 'center' }}>Sign Up</Text>
                    </TouchableOpacity>

                    <View><Text style={{ fontSize: 20, color: 'blue', margin: 5, textAlign: 'center' }}>Already have an account ?</Text></View>

                    {/* ---------------------------------------------------- */}
                    {/* ----------viev close-------------------------------- */}


                </View>
                {/* // <View> 2nd close */}

            </View>
            {/* // <View> 1st close */}
            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    headerTitle1: {
        fontSize: 32,
        fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'blue',
        marginTop: 10,
        padding: 2

    },
    headerTitle2: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        marginTop: 0,
        padding: 2,
    },
    headerTitle3: {
        fontSize: 20,
        // fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        marginTop: 1,
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
    }


})

