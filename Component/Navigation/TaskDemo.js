import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
//npm install @react-navigation/native
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class TaskDemo extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Hi" component={HiScreen} />
                    <Stack.Screen name="second" component={AboutUsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function HiScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.text}> {route.params?.post}</Text>
            <Text style={styles.text}> {route.params?.post1}</Text>
            <Text style={styles.text}> {route.params?.post2}</Text>
            <Text style={styles.text}> {route.params?.post3}</Text>
            <TouchableOpacity
                style={{ backgroundColor: 'teal' }}
                onPress={() => navigation.navigate('second', {
                })}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10 }}>
                    second
                </Text>
            </TouchableOpacity>
        </View>
    );
}

function AboutUsScreen({ navigation }) {
    const [postText, setPostText] = React.useState('');
    const [postText1, setPostText1] = React.useState('');
    const [postText2, setPostText2] = React.useState('');
    const [postText3, setPostText3] = React.useState('');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Enter Your Details </Text>
            <TextInput
                multiline
                placeholder="Enter your name"
                style={styles.TextInput}
                value={postText}
                onChangeText={setPostText}
            />
            <TextInput
                multiline
                placeholder="Enter your email"
                style={styles.TextInput}
                value={postText1}
                onChangeText={setPostText1}
            />
            <TextInput
                placeholder="password"
                secureTextEntry={true}
                style={styles.TextInput}
                value={postText2}
                onChangeText={setPostText2}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="confrom password"
                style={styles.TextInput}
                value={postText3}
                onChangeText={setPostText3}
            />
            <View style={{ backgroundColor: 'pink', color: 'black', fontSize: 28 }}>
            </View>
            <View style={{ fontSize: 28, backgroundColor: 'red', color: 'white' }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'teal' }}
                    onPress={() => {
                        navigation.navigate({
                            name: 'Hi',
                            params: { post: postText, post1: postText1, post2: postText2, post3: postText3 },
                            merge: true,
                        });
                    }}
                >
                    <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', margin: 10 }}>
                        Hi
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
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
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25
    }
})