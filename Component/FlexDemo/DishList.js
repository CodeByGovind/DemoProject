import { Text, View, StyleSheet, Image ,ScrollView} from 'react-native'
import React, { Component } from 'react'

export default class DishList extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>

                <View style={{
                    flexDirection: 'column', flex: 1, backgroundColor: 'white',
                    margin: 15, borderRadius: 20
                }}>
                    <View style={{ flexDirection: 'row'}}>
                        <View style={{ flexDirection: 'column', margin: 20 }}>
                            <Text style={styles.addressText1}>GuruKripa{"\n"}Resturant -{"\n"}Sarvate</Text>
                            <Text style={styles.titleText2}> 3.9 (5k + ratings)</Text>
                            <Text style={styles.titleText2}>North Indian, Chinese</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo1}
                            source={require('../FlexDemo/image/img.jpg')} />
                    </View>
                    <View style={{ height: 2, backgroundColor: 'grey', marginTop: 20 }}> </View>
                    <View style={{ margin: 20 }}>
                        <Text style={styles.titleText2}>36 min delivery from Sarvate</Text>
                        <Text style={styles.titleText2}>0-3 kms | Rainy weather, additional {"\n"}
                            delivery fee will apply
                        </Text>
                    </View>
                </View>
                <ScrollView horizontal={true}>
                
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>Special Lunch</Text>
                            <Text style={styles.titleText2}>₹256</Text>
                            <Text style={styles.titleText2}>Dal,butter{"\n"}paneer masala</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/img-1.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>Special Lunch</Text>
                            <Text style={styles.titleText2}>₹256</Text>
                            <Text style={styles.titleText2}>Dal,butter{"\n"}paneer masala</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/img-2.jpg')} />
                    </View>
                </View>

                <View>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>Special Lunch</Text>
                            <Text style={styles.titleText2}>₹256</Text>
                            <Text style={styles.titleText2}>Dal,butter{"\n"}paneer masala</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/img-3.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>Special Lunch</Text>
                            <Text style={styles.titleText2}>₹256</Text>
                            <Text style={styles.titleText2}>Dal,butter{"\n"}paneer masala</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/img-4.jpg')} />
                    </View>
                </View>
                </View>

                <View>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>Special Lunch</Text>
                            <Text style={styles.titleText2}>₹256</Text>
                            <Text style={styles.titleText2}>Dal,butter{"\n"}paneer masala</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/img-5.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>Special Lunch</Text>
                            <Text style={styles.titleText2}>₹256</Text>
                            <Text style={styles.titleText2}>Dal,butter{"\n"}paneer masala</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/img-6.jpg')} />
                    </View>

                    <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>Special Lunch</Text>
                            <Text style={styles.titleText2}>₹256</Text>
                            <Text style={styles.titleText2}>Dal,butter{"\n"}paneer masala</Text>
                        </View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/img-7.jpg')} />
                    </View>
                    </View>
                </View>
                </View>

                </ScrollView>

                </View>
                


            

        )
    }
}

const styles = StyleSheet.create({
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
})
{/* <Text style={styles.titleText}>DishList</Text> */ }