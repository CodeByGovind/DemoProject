// https://aboutreact.com/react-native-login-and-signup/#Register-Screen
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import { Component, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import App from '../Navigation/Sidemenu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default class AsynStorageDemos extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>

                    {/* <Stack.Screen name="Home" component={HomeScreen}options={{ headerShown: false }} /> */}
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="home" component={HomePage} />
                    <Stack.Screen name="Update" component={UpdateScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}



function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginCheck = () => {
        AsyncStorage.getItem('student')
            .then((response) => {
                const stud = JSON.parse(response)
                const gemail = stud.email
                const gpassword = stud.password
                console.log(gemail, gpassword)
                // console.log(response)
                // console.log("TextInput:", email, password)

                if (gemail == email && gpassword == password) {
                    navigation.navigate("Home")
                }
                else {
                    console.log("error")
                }
            }
            )
            .catch((error) => console.log(error))

    }

    return (
        <View style={{ flex: 1, marginTop: 50, marginLeft: 30 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Email</Text>
            <TextInput
                style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                placeholder=" Enter your email   "
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(e) => setEmail(e)}
            />
            <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30, marginTop: 50 }}>Password</Text>
            <TextInput
                style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}

                placeholder=" Enter your  Password  "
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e)}

            />

            <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 270 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '40%',margin:20 }}
                    onPress={() => loginCheck()}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                        Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '40%', margin: 20 }}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
// }
//====================================2nd page======================================================
// 2.) SignUp
//    textInput:stud_name
//    textInput:stud_email
//    textInput:stud_password
//    textInput:stud_course
//    textInput:stud_rollno
//    textInput:stud_fees 
//    TouchableOpacity:register (store data in asynstorage)

function SignUpScreen({ navigation }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [course, setCourse] = useState("")
    const [rollno, setRollno] = useState("")
    const [fees, setFees] = useState("")

    const storeData = async () => {
        try {
            const student = {
                name: name,
                email: email,
                password: password,
                course: course,
                rollno: rollno,
                fees: fees
            }
            const jsonValue = JSON.stringify(student)
            await AsyncStorage.setItem('student', jsonValue)
            console.log("Data Store Successfully!!")
            HomeScreen("TextInput:", student)
            if (email && password) {
                navigation.navigate("Register")
            }

        } catch (e) {
            console.log("Saving Error:", e)
        }
    }



    return (
        <ScrollView>
            <View style={{ flex: 1, marginTop: 20, margin: 30 }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Name :{name}</Text>

                <TextInput

                    placeholder=" Enter stud_name  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setName(e)}

                />

                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Email:{email} </Text>

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" Enter stud_email  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setEmail(e)}

                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Password :{password}</Text>

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder=" Enter stud_password  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setPassword(e)}

                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Course:{course} </Text>

                <TextInput
                    onChangeText={(e) => setCourse(e)}

                    placeholder=" Enter stud_course  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student rollno:{rollno} </Text>
                <TextInput
                    placeholder=" Enter stud_rollno  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setRollno(e)}
                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Fees :{fees}</Text>
                <TextInput
                    placeholder=" Enter stud_fees  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setFees(e)}
                />
                <TouchableOpacity
                    style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '40%', marginLeft: 100, marginTop: 20 }}
                    onPress={() => storeData()}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                        Register
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

//================================================3rd Update==============

// 3.) Update
//    textInput:stud_name
//    textInput:stud_email
//    textInput:stud_password
//    textInput:stud_course
//    textInput:stud_rollno
//    textInput:stud_fees 
//    TouchableOpacity:register (store data in asynstorage)

function UpdateScreen() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [course, setCourse] = useState("")
    const [rollno, setRollno] = useState("")
    const [fees, setFees] = useState("")

    const storeData = async () => {
        try {
            const student = {
                name: name,
                email: email,
                password: password,
                course: course,
                rollno: rollno,
                fees: fees
            }
            const jsonValue = JSON.stringify(student)
            await AsyncStorage.setItem('student', jsonValue)

        } catch (e) {
            console.log("Saving Error:", e)
        }
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, marginTop: 20, margin: 30 }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Name</Text>
                <TextInput
                    placeholder=" Enter stud_name  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setName(e)}
                />

                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Email</Text>

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder=" Enter stud_email  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setEmail(e)}
                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Password</Text>

                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder=" Enter stud_password  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setPassword(e)}
                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Course</Text>

                <TextInput
                    onChangeText={(e) => setCourse(e)}

                    placeholder=" Enter stud_course  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student rollno</Text>
                <TextInput
                    placeholder=" Enter stud_rollno  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setRollno(e)}
                />
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginLeft: 30 }}>Student Fees</Text>
                <TextInput

                    placeholder=" Enter stud_fees  "
                    style={{ borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', margin: 2, textAlign: 'center' }}
                    onChangeText={(e) => setFees(e)}
                />

                <TouchableOpacity
                    style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '40%', marginLeft: 100, marginTop: 20 }}
                    onPress={() => storeData()}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                        Update
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

//====================4th Home Screen=========================================================================

function HomePage(navigation) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [course, setCourse] = useState("")
    const [rollno, setRollno] = useState("")
    const [fees, setFees] = useState("")

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('student')
            const p1 = JSON.parse(jsonValue)
            if (p1 == null) {
                setName(""), setEmail(""), setPassword(""), setCourse(""), setRollno(""), setFees("")
            } else {
                setName(p1.name), setEmail(p1.email), setPassword(p1.password), setCourse(p1.course), setRollno(p1.rollno), setFees(p1.fees)
            }
        } catch (e) {
            console.log("Reading Error:", e)
        }}
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}> HomePage </Text>
            <View style={{ height: 20, color: "black" }}></View>
            <Text style={styles.headerTitle}>{name}</Text>
            <Text style={styles.headerTitle}>{email}</Text>
            <Text style={styles.headerTitle}>{password}</Text>
            <Text style={styles.headerTitle}>{course}</Text>
            <Text style={styles.headerTitle}>{rollno}</Text>
            <Text style={styles.headerTitle}>{fees}</Text>
            <TouchableOpacity
                style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '40%', margin: 20 }}
                onPress={() => getData()}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                    getData
                </Text>
            </TouchableOpacity>
        </View>
    );
}
function NotificationScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Career screen</Text>
        </View>
    );
}

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Profile screen</Text>
        </View>
    );
}
function LogoutScreen() {

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem('student')
            console.log("Value Removed!!")
        }
        catch (e) {
            // error reading value
            console.log("Removed Error:", e)
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Are you sure ?  </Text>
            <TouchableOpacity
                style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '40%', margin: 20 }}
                onPress={() => removeData()}
            >
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
}
//=============================5th screen===========================================
function HomeScreen() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    //===============================================================================
                    // "md-log-in","md-log-in-outline","md-log-in-sharp","md-log-out","md-log-out-outline","md-log-out-sharp","md-logo-amazon","md-logo-amplify","md-logo-android","md-logo-angular","md-logo-apple","md-logo-apple-appstore","md-logo-bitbucket","md-logo-bitcoin"
                    // md-search","md-search-circle","md-search-circle-outline","md-search-circle-sharp",
                    if (route.name == "home") {
                        iconName = focused ? 'albums' : 'albums-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'menu'
                            : 'menu-outline';
                    }
                    else if (route.name === 'Logout') {
                        iconName = focused
                            ? 'md-log-out'
                            : 'md-log-out-outline';
                    }
                    else if (route.name === 'App') {
                        iconName = focused
                            ? 'ios-notifications-circle'
                            : 'ios-notifications-circle-outline';
                    }
                    else if (route.name == "Update") {
                        iconName = focused ? 'md-pencil' : 'md-pencil-outline';
                    }
                    return <Ionicons name={iconName} size={60} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: 'blue',
                tabBarInactiveBackgroundColor: 'silver',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { height: 90 },
                tabBarLabelStyle: {
                    fontSize: 23,
                }
            })}
        >
            <Tab.Screen name="App" component={App} options={{ headerShown: false }} />
            <Tab.Screen name="home" component={HomePage} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Update" component={UpdateScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>

    );
}

//====================================================================================

function RegisterScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', alignItems: 'flex-end' }}>Register  Successfully!!!</Text>
            <TouchableOpacity
                style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', marginLeft: 20, marginTop: 20 }}
                onPress={() => navigation.goBack()}
            >
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                    Go back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', marginLeft: 20, marginTop: 20 }}
                onPress={() => navigation.popToTop()}
            >
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                    Go back to first screen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: 'teal', borderRadius: 10, borderWidth: 2, color: 'black', fontSize: 20, borderColor: 'black', width: '90%', marginLeft: 20, marginTop: 20 }}
                onPress={() => {
                    navigation.navigate({
                        name: 'Home',
                        merge: true,
                    });
                }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10, alignSelf: 'center' }}>
                    Go to Home screen
                </Text>
            </TouchableOpacity>
        </View>);
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginTop: 30
    }
})
