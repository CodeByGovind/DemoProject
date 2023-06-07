import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image, Button, Number, password, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import { Switch } from 'react-native-switch'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';


export default class ShoppingAssigment extends Component {
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
    deleteRecord = (gId) => {
        // console.log(gId)
        const newRecord = this.state.studentRecord.filter(item => item.stud_id !== gId)
        // console.log(newRecord)
        this.setState({
            studentRecord: newRecord
        })
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

                <View style={{ flex: 1, backgroundColor: 'silver' }}>
                    {/* //  input View */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            style={styles.tinyLogo1}
                            source={require('../FlexDemo/image/shoppingimg.jpg')} />


                    </View>
                    <View>
                        <Text style={styles.headerTitle1}>ONLINE SHOPPING</Text>
                        <TextInput
                            style={{ margin: 5, fontSize: 20, borderRadius: 0, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', marginLeft: 20 }}
                            placeholder=' Hello '
                            // ---------------------------
                            onChangeText={(e) =>
                                this.setState(() => ({
                                    userName: e
                                }))
                            }
                        />
                    </View>
                    {/* //  input View */}
                    <View style={{ borderColor: 'black', borderRadius: 0, borderWidth: 2, width: '90%', height: 70, marginLeft: 20, marginTop: 10, flexDirection: 'row' }}>
                        <Text style={styles.headerTitle2a}>Select City :</Text>
                        <Picker
                            style={{ backgroundColor: 'white', color: 'black', width: '50%', alignContent: 'center', alignItems: 'center' }}
                            selectedValue={this.state.selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({
                                    selectedLanguage: itemValue
                                })
                            }>
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="Kanpur" value="ja" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="Nagpur" value="jb" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="Mandsor" value="jc" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="Nashik" value="jd" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="Pune" value="je" />
                        </Picker>
                    </View>
                    <View style={{ width: '90%', marginLeft: 20, marginTop: 10, borderColor: 'black', borderRadius: 1, borderWidth: 2 }}>
                        <Text style={{ fontSize: 25, }}>price($):{this.state.loanAmount}</Text>
                        <Slider
                            style={{ width: '90%', height: 35, marginLeft: 20 }}
                            minimumValue={0}
                            maximumValue={10000}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                            onValueChange={value => this.setState({ loanAmount: value })}
                        /></View>
                    {/* //67--93---------------------------------------cloth------------------- */}


                    <View style={{ borderColor: 'black', borderRadius: 0, borderWidth: 2, width: '90%', height: 70, marginLeft: 20, marginTop: 8, flexDirection: 'row' }}>
                        <Text style={styles.headerTitle2a}>Select Items :</Text>
                        <Picker
                            style={{ backgroundColor: 'white', color: 'black', width: '42%', alignContent: 'center', alignItems: 'center' }}
                            selectedValue={this.state.selectedcloth}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({
                                    selectedcloth: itemValue
                                })
                            }>
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="cloth" value="java" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="Shirt" value="java" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="T-Shirt" value="js" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="jeans" value="jb" />
                            <Picker.Item style={{ fontSize: 25, fontWeight: 'bold' }} label="Shooes" value="jt" />
                        </Picker>
                    </View>
                    <View style={{ borderColor: 'black', borderRadius: 0, borderWidth: 2, width: '90%', height: 70, marginLeft: 10, marginTop: 8, flexDirection: 'row' }}>
                        <View>
                            {/* <Button onPress={() => this.showDatepicker()}

                                title="Date" /> */}

                            <TouchableOpacity onPress={() => this.showDatepicker()}

                                title="Date">

                         <Image
                            style={styles.tinyLogo2}
                            source={require('../FlexDemo/image/Dateimg.jpg')} />
                            </TouchableOpacity>

                        </View>

                        <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 60
                        , marginTop: 10 }}> {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</Text>
                    </View>
                    <View style={{ borderColor: 'black', borderRadius: 0, borderWidth: 2, width: '90%', height: 53, marginLeft: 20, marginTop: 8, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 28, color: 'black', fontWeight: 'bold', alignSelf: 'center' }}>Are you Married :</Text>
                        {this.state.empStatus ?
                            <Text style={{ fontSize: 28, color: 'red', fontWeight: 'bold', alignSelf: 'center' }}>YES </Text> : <Text style={{ fontSize: 28, color: 'green', fontWeight: 'bold', alignSelf: 'center' }}>NO </Text>}
                        <View style={{ marginLeft: 10 }}>
                            <Switch
                                value={this.state.empStatus}
                                onValueChange={(val) => this.setState({
                                    empStatus: val
                                })
                                }
                                disabled={false}
                                activeText={'YES'}
                                inActiveText={'NO'}
                                circleSize={50}
                                barHeight={50}
                                circleBorderWidth={20}
                                backgroundActive={'red'}
                                backgroundInactive={'green'}
                                circleActiveColor={'#30a566'}
                                circleInActiveColor={'#000000'}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, marginTop: 8 }}>
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
                                GET DETAIL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: 160, height: 60, marginLeft: 30,
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
                    <View style={{ borderColor: 'black', borderRadius: 0, borderWidth: 2, width: '90%', height: 100, marginLeft: 20, marginTop: 8, flexDirection: 'row' }}>
                        <View>

                            <Text style={styles.headerTitle2}>Name :{this.state.userName}</Text>
                            <Text style={styles.headerTitle2}>item :{this.state.sItem}</Text>
                        </View>

                        <View>
                            <Text style={styles.headerTitle2}>price :{this.state.price}</Text>
                            <Text style={styles.headerTitle2}>city :{this.state.city}</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 25, color: 'red', marginLeft: 20 }}> * 50 % off for Married  { }</Text>
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
        fontSize: 30,
        // fontWeight: 'bold',
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black',
        marginLeft: 9,
        paddingLeft: 25,
        paddingTop: 7
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
