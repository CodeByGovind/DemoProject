import { Text, View, StyleSheet,Image } from 'react-native'
import React, { Component } from 'react'

export default class Display extends Component {
    render() {
        return (
            <View>
                <Image
style={styles.img}
source={require('../FlexDemo/image/s1.jpg')}/>
                <Text>display</Text>

            </View>
        )
    }
}
const styles =StyleSheet.create({  
 img: {
        width: 200,
        height: 200,
        margin: 20,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        resizeMode: 'center',
        borderRadius: 100,
        backgroundColor: 'teal',
        margin: 10
    }
})
