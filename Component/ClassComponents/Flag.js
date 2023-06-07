import { Text, View, StyleSheet, Image,ImageBackground } from 'react-native'
import React, { Component } from 'react'

export default class Flag extends Component {
    render() {
        return (
            
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                {/* //============================================ */}
                <View style={{ flex: 1, backgroundColor: 'orange' }}>

                </View>
                {/* //========================================== */}
                <View style={{ flex: 1, backgroundColor: 'white' }}>

                <Image
                                style={styles.tinyLogo}
                                source={require('../FlexDemo/image/flagimg.jpg')} />
                <Text style={{fontSize:32,fontWeight:'bold',color:'blue',textAlign:'center',justifyContent:'space-around'}}> I Love My India </Text>
                
                </View>
                {/* //======================================= */}
                <View style={{ flex: 1, backgroundColor: 'green' }}>


                </View>
                {/* //======================================== */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'silver',
        textAlign: 'center',
        color: 'red'
    },
    tinyLogo: {
        alignSelf: 'center',

        width: 180,
        height: 180,
        // width: 80,
        // height: 80,
        // margin: 20,
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