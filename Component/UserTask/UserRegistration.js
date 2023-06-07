import { Text, View, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, deleteUser } from './Actiontask'
import RadioForm from 'react-native-simple-radio-button';

class UserRegistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Name: 'hello',
            id: 0,
            Age: 0,
            Address: 'indore',
            radio_props:
                [
                    { label: 'Male', value: 'Male' },
                    { label: 'Female', value: 'Female' },
                    { label: 'other', value: 'other' }

                ],
            gender: 'Male',
            record: []
        }
    }


    getPersonDetails = () => {
        const person = this.state
        this.props.submitPersonDetail(person)
    }

    componentDidMount() {
        console.log("Data : -", this.props.users)
    }
    onDeleteHandler = (id) => {
        this.props.deletePerson(id)
    }

    render() {
        console.log("Data :-", this.props.users)
        return (
            <View style={{ flex: 5, }}>
                <View style={{ flex: 1, backgroundColor: 'pink' }}>
                    <Text style={{
                        fontSize: 30, backgroundColor: 'lightgreen', fontWeight: 'bold',
                        color: 'black', textAlign: 'center', marginTop: 0
                    }}>
                        User Registration</Text>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                                borderRadius: 10, borderWidth: 2, borderColor: 'black'
                                , backgroundColor: 'white', width: '50%', margin: 2, marginLeft: 0
                            }}>
                                <TextInput
                                    placeholder='Enter your Name'
                                    style={styles.textInputStyle}
                                    onChangeText={(e) =>
                                        this.setState({
                                            Name: e
                                        })
                                    }
                                ></TextInput>
                            </View>
                            <View style={{
                                borderRadius: 10, borderWidth: 2, borderColor: 'black'
                                , backgroundColor: 'white', width: '50%', margin: 2, marginLeft: 0
                            }}>
                                <TextInput
                                    placeholder='Enter your Age'
                                    style={styles.textInputStyle}
                                    onChangeText={(e) =>
                                        this.setState({
                                            Age: e
                                        })
                                    }
                                ></TextInput>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={{
                                borderRadius: 10, borderWidth: 2, borderColor: 'black'
                                , backgroundColor: 'white', width: '50%', margin: 2, marginLeft: 0
                            }}>
                                <TextInput
                                    placeholder='Enter your Add'
                                    style={styles.textInputStyle}
                                    onChangeText={(e) =>
                                        this.setState({
                                            Address: e
                                        })
                                    }
                                ></TextInput>

                            </View>
                            <View style={{
                                alignSelf: 'center',
                                borderRadius: 10, borderWidth: 2, borderColor: 'black'
                                , backgroundColor: 'lightgrey', width: '49%', margin: 2, margin: 2
                            }}>

                                <RadioForm
                                    radio_props={this.state.radio_props}
                                    initial={0}
                                    formHorizontal={true}
                                    labelHorizontal={false}
                                    buttonColor={'red'}
                                    buttonSize={20}
                                    buttonOuterSize={40}
                                    buttonStyle={{}}
                                    buttonWrapStyle={{ marginLeft: 20 }}
                                    onPress={(value) => { this.setState({ gender: value }) }}
                                />
                            </View>
                        </View>


                        <View style={styles.submitview}>
                            <TouchableOpacity
                                style={styles.submitbtn}
                                onPress={() => this.getPersonDetails()}
                            >
                                <Text  style={styles.submittext}> Submit</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'lightgreen', borderRadius: 10, borderWidth: 2, borderColor: 'black' }}>

                        <FlatList
                            contentContainerStyle={{ paddingBottom: 20 }}
                            data={this.props.users}
                            // data={this.state.record}

                            renderItem={({ item, index }) =>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={require('../FlexDemo/image/rohit-sharma.jpg')} />
                                    <View style={{ flexDirection: 'column', margin: 10 }}>
                                        {/* <Text style={styles.titleText2}>{item.id} </Text> */}
                                        <Text style={styles.titleText2}>{index} </Text>
                                        <Text style={styles.titleText1}>{item.Name} </Text>
                                        <Text style={styles.titleText3}>{item.gender} </Text>
                                        <Text style={styles.titleText2}>{item.Age} </Text>
                                        <Text style={styles.titleText2}>{item.Address} </Text>

                                        <TouchableOpacity
                                            style={styles.dbtn}
                                            onPress={() => this.onDeleteHandler(item.id)}>
                                            <Text style={styles.dtext}>DELETE</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            }
                        >
                        </FlatList>
                    </View>
                </View>

            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        users: state.users,
    }
}
const mapDispatchToProps = dispatch => {
    return {

        submitPersonDetail: (person) => dispatch(addUser(person)),
        deletePerson: (id) => dispatch(deleteUser(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration)


const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 22,
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
    titleText3: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInputStyle: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 22,
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
        width: 80, tinyLogo1: {
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
    dbtn: {
        width: 160, height: 70,
        backgroundColor: 'red', borderRadius: 10,
        borderWidth: 2, borderColor: 'black', justifyContent: 'center'
    },
    dtext: {
        fontSize: 28, fontWeight: 'bold', color: 'white',
        textAlign: 'center'
    },
    submitbtn:{
        width: 150, height: 50,
        backgroundColor: 'blue', borderRadius: 10, margin: 2, borderWidth: 2,
        borderColor: 'black', justifyContent: 'center',
    },
    submittext:{
        fontSize: 26, fontWeight: 'bold', color: 'white',
        textAlign: 'center',
    },
submitview:{
    borderRadius: 10, borderWidth: 0, borderColor: 'black'
    , backgroundColor: 'white', width: 150, margin: 0, alignSelf: 'center', margin: 0
}

})

