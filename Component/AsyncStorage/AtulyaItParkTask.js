import React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet, Button } from 'react-native'
import { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker'
import RadioForm from 'react-native-simple-radio-button';


const Stack = createNativeStackNavigator();
export default class AtulyaItParkTask extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SignUp" component={Sign_Up} />
                    <Stack.Screen name="Dashoard" component={DASHBOARD} options={{ headerShown: false }} />
                    <Stack.Screen name="SignIn" component={Sign_In} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
//=================1st=============
function Sign_Up({ navigation }) {
    const [user_id, setUser_id] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("Male")
    const [city, setCity] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    //==============================
    const data = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'other', value: 'other' }
    ];
    //=====================================
    const storeData = async () => {
        try {
            if (password != confirmpassword) {
                alert("Confirm Your Password")
            } else {

                const user = {
                    user_id: user_id,
                    name: name,
                    email: email,
                    gender: gender,
                    city: city,
                    password: password,

                }
                console.log(user);
                const jsonValue = JSON.stringify(user)
                await AsyncStorage.setItem('user', jsonValue)
                console.log("Data Store Successfully!!")
                DASHBOARD("TextInput:", user)
                if (password === jsonValue.password) {
                    alert("Registeration Successfull...")
                    navigation.navigate("SignIn")
                }
            }
        } catch (e) {
            console.log("Saving Error:", e)
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.Text1}>SIGN UP</Text>

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" USER ID :     Should be a number "
                    style={styles.TextInput}
                    onChangeText={(e) => setUser_id(e)}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="NAME :  Name should have  "
                    style={styles.TextInput}
                    onChangeText={(e) => setName(e)}
                />
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" EMAIL :   write valid email here "
                    style={styles.TextInput}
                    onChangeText={(e) => setEmail(e)}
                />

                {/* //=========================================== */}
                <View
                    style={styles.radiobtn}>
                    <RadioForm
                        radio_props={data}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={false}
                        buttonColor={'red'}
                        buttonSize={13}
                        buttonOuterSize={20}
                        buttonWrapStyle={{ marginLeft: 20 }}
                        onPress={(value) => setGender(value)}
                    />
                    <Text style={styles.Text2}>{gender} </Text>

                </View>
                {/* //================================================== */}

                <View style={styles.radiobtn}>
                    <Text style={styles.Text}>{city}</Text>
                    <Picker
                        style={styles.radiobtn}
                        selectedValue={city}
                        onValueChange={(itemValue) =>
                            setCity(itemValue)
                        }>
                        <Picker.Item style={styles.Text} label="Select Highest Qualification" value="S no." />
                        <Picker.Item style={styles.Text} label="10TH" value="10TH" />
                        <Picker.Item style={styles.Text} label="12TH" value="12TH" />
                        <Picker.Item style={styles.Text} label="GRADUATION" value="GRADUATION" />
                        <Picker.Item style={styles.Text} label=" POST GRADUATION" value="POST GRADUATION" />
                    </Picker>
                </View>

             
                {/* //======================================== */}
                <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                    placeholder="PASSWORD :  password "
                    secureTextEntry={true}
                    style={styles.TextInput}
                    onChangeText={(e) => setPassword(e)}
                />
                <TextInput
                    style={styles.TextInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" CONFIRM :   password  "
                    secureTextEntry={true}
                    onChangeText={(e) => setConfirmpassword(e)}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>{ storeData(), navigation.navigate('SignIn')}}
                >
                    <Text style={styles.btnText}>
                        sign up
                    </Text>
                </TouchableOpacity>
                <View style={styles.btnView}>
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.btnText}>
                            Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn1}
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.btnText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

//====================2th Home Screen========================================

function DASHBOARD(navigation) {
    const [user_id, setUser_id] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("")


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            const p1 = JSON.parse(jsonValue)
            if (p1 == null) {
                setUser_id(""), setName(""), setEmail(""), setGender(""), setCity("")
            } else {
                setUser_id(p1.user_id), setName(p1.name), setEmail(p1.email), setGender(p1.gender), setCity(p1.city)
            }
        } catch (e) {
            console.log("Reading Error:", e)
        }
    }

    //================================================
    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('user')
            navigation.navigate("SignIn")
            console.log("Value Removed!!")
        }
        catch (e) {
            console.log("Removed Error:", e)
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.Text1}>DASHBOARD</Text>

            <Text style={styles.Text}>{user_id}</Text>
            <Text style={styles.Text}>{name}</Text>
            <Text style={styles.Text}>{email}</Text>
            <Text style={styles.Text}>{gender}</Text>
            <Text style={styles.Text}>{city}</Text>

            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => getData()}>
                    <Text style={styles.btnText}>
                        GetData
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => {
                        removeData(),
                        navigation.navigate("SignIn")
                    }
                    }
                >
                    <Text style={styles.btnText}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
// ================================3 rd========================

function Sign_In({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Login = () => {
        AsyncStorage.getItem('user')
            .then((response) => {
                const USER = JSON.parse(response)
                console.log(USER);
                const gemail = USER.email
                const gpassword = USER.password
                
                if (gemail == email && gpassword == password) {
                    navigation.navigate("Dashoard")
                }
                else {
                    console.log("error")
                }
            }
            )
            .catch((error) => console.log(error))

    }

    return (
        <View style={styles.container}>
            <Text style={styles.Text1}>SIGN IN</Text>

            <Text style={styles.Text}>EMAIL ADDRESSS</Text>
            <TextInput
                style={styles.TextInput}
                placeholder=" write Email Here "
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(e) => setEmail(e)}
            />
            <Text style={styles.Text}>PASSWORD</Text>
            <TextInput
                style={styles.TextInput}
                placeholder=" write  Password Here "
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}
            />
            <TouchableOpacity style={styles.btn}
                onPress={() => Login()}>
                <Text style={styles.btnText}>
                    Sign In</Text>
            </TouchableOpacity>


            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => navigation.navigate('SignIn')}

                >
                    <Text style={styles.btnText}>
                        Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn2}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.btnText}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// =============================
const styles = StyleSheet.create({
    container: {
        margin: 20, backgroundColor: 'white'
    },
    Text: {
        fontSize: 20, fontWeight: '400', marginLeft: 20, color: 'black'
    },
    Text1: {
        fontSize: 25, fontWeight: '600', marginLeft: 20, textAlign: 'center', color: 'black', margin: 10
    },
    Text2: {
        fontSize: 20, fontWeight: '600', marginLeft: 100, textAlign: 'center', color: 'black', margin: 5
    },
    Text3: {
        fontSize: 20, fontWeight: '600', marginLeft: 110, textAlign: 'center', color: 'black', margin: 5
    },
    TextInput: {
        borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 18, borderColor: 'black', width: '100%', margin: 2, textAlign: 'center',color: 'black'
    },
    btn: {
        backgroundColor: 'brown', borderRadius: 10, width: '50%', alignSelf: 'center', marginTop: 10,
    },
    btn1: {
        backgroundColor: 'blue', borderRadius: 10, width: '40%', alignSelf: 'center', margin: 20
    },
    btn2: {
        backgroundColor: 'blue', borderRadius: 10, width: '40%', alignSelf: 'center', margin: 15, marginTop: 300
    },
    btnText: {
        fontSize: 22, fontWeight: 'bold', color: 'white', margin: 5, alignSelf: 'center'
    },
    btnView: { marginLeft: 22, flexDirection: 'row'
 },
    DatePicker: { borderColor: 'black', borderRadius: 10, borderWidth: 2, width: '100%', height: 50, marginTop: 8, flexDirection: 'row'
 },
    radiobtn: {
        alignSelf: 'center',
        borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 5, padding: 5, width: '100%', margin: 2, height: 50, flexDirection: 'row'
    },
    radiobtn1: {
        alignSelf: 'center',borderRadius: 10, borderWidth: 2, borderColor: 'black', margin: 5, padding: 5, width: '100%', margin: 2, height: 50, flexDirection: 'row', marginLeft: 88
    },
})