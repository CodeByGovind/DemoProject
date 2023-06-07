import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Text, View, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class Testa extends Component {
    render() {
        return (

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Homepage} />
                    <Stack.Screen name="Add" component={AddScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
function Homepage({ navigation, route }) {

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <LinearGradient
                colors={['#fff', '#fff', '#33ccff']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>

                    

                <Text style={styles.text}> {route.params?.post}</Text>
                <Text style={styles.text}> {route.params?.post1}</Text>
                <Text style={styles.text}> {route.params?.post2}</Text>
                <Text style={styles.text}> {route.params?.post3}</Text>
                <Text style={styles.text}> {route.params?.post4}</Text>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Add')}
                >
                    <Text style={{
                        fontSize: 22, fontWeight: '400', textAlign: 'center', color: 'white', margin: 10
                    }}>
                        Add
                    </Text>
                </TouchableOpacity>

            </LinearGradient>

        </View>
    );
}

function AddScreen({ navigation }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [birth, setBirth] = useState()
    const [number, setNumber] = useState()
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")

    const [data, setData] = useState([])
    // 1st===================
    const postUser = () => {


        var ob = {name:name,email:email,birth:birth,number:number,gender:gender,address:address}

        setData([...data,ob])

        var formData = new FormData()

        formData.append("UserName",name);
        formData.append("UserEmail",email);
        formData.append("BirthDate",birth);
        formData.append("ContactNumber",number);
        formData.append("Gender",gender);
        formData.append("Address",address);
        formData.append("ProfileImage",);

        



        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        };

        fetch('https://www.innopadsolutions.com/projects/androidapi/webservice/AddUser', requestOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log('Fetch Api response', json);

            })
            .catch((error) => {
                console.error(error);
            });

    }

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <LinearGradient
                    colors={['#fff', '#fff', '#33ccff']}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>

                    <TextInput
                        placeholder=" Enter name  "
                        style={styles.TextInput}
                        onChangeText={(e) => setName(e)}
                    />
                    <TextInput
                        placeholder=" Enter Email  "
                        style={styles.TextInput}
                        onChangeText={(e) => setEmail(e)}
                    />
                    <TextInput
                        placeholder=" Enter Birth  "
                        style={styles.TextInput}
                        onChangeText={(e) => setBirth(e)}
                    />
                    <TextInput
                        placeholder=" Enter Number  "
                        style={styles.TextInput}
                        onChangeText={(e) => setNumber(e)}
                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder=" Enter Gender  "
                        style={styles.TextInput}
                        onChangeText={(e) => setGender(e)}

                    />
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder=" Enter Address  "
                        style={styles.TextInput}
                        onChangeText={(e) => setAddress(e)}

                    />


                    <TouchableOpacity
                        style={styles.button}
                    
                    onPress={() => {
                        postUser(), navigation.navigate({
                            name: 'Home',
                            params: { post: name, post1: email, post2: birth, post3: gender,post4:address },
                            merge: true,
                        });
                    }}
                    >
                        <Text style={{
                            fontSize: 22, fontWeight: '400', textAlign: 'center', color: 'white', margin: 10
                        }}
                        >
                            Submit
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    titleText1: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: "black",
        justifyContent: 'center',
        margin: 20
    },

    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: "white",
        justifyContent: 'center',
        margin: 20
    },
    TextInput: {
        borderRadius: 10,
        margin: 20,
        borderWidth: 2,
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25
    },
    button: {
        width: '70%',
         borderRadius: 50,
         borderWidth: 2, 
        backgroundColor: '#33ccff',
        alignSelf: 'center',
         margin: 10
    },
})