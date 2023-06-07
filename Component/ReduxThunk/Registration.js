import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


export default function RegistrationScreen({ navigation }) {
    const [postText, setPostText] = React.useState('');
    const [postText1, setPostText1] = React.useState('');
    const [postText2, setPostText2] = React.useState('');
    const [postText3, setPostText3] = React.useState('');
    return (
        <View style={{ flex: 1,}}>
                <LinearGradient
                    colors={['#33ccff', '#ff99cc']}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
            <Text style={styles.text}>Enter Your Details </Text>
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
            <View>
                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => {
                        navigation.navigate({
                            name: 'Registration',
                            params: { post: postText, post1: postText1, post2: postText2, post3: postText3 },
                            merge: true,
                        });
                    }}
                >
                    <Text style={{ fontSize: 25, color: 'black',textAlign:'center' }}>
                    Registration
                    </Text>
                </TouchableOpacity>
            </View>
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 29,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: "black",
        justifyContent: 'center',
        margin: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    container:{
        justifyContent:'center' ,height:"100%"
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
        borderRadius: 50,
        margin: 20,
        borderWidth: 2,
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25,
        backgroundColor:'white'
    },
    loginBtn: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 50,
        width: '80%',
        borderColor: 'black',
        marginTop: 20,
        padding: 16
    },
})
