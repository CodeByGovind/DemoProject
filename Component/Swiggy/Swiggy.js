import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import SearchBar from "react-native-dynamic-search-bar";

export default class Swiggy extends Component {
    handleOnChangeText = (text) => {
        // ? Visible the spinner
        this.setState({
            searchText: text,
            spinnerVisibility: true,
        });

        // ? After you've done to implement your use-case
        // ? Do not forget to set false to spinner's visibility
        this.setState({
            spinnerVisibility: false,
        });
    };

    render() {
        const { spinnerVisibility } = this.setState;

        return (
            <View>
                <View style={{
                    borderRadius: 10, borderWidth: 2, borderColor: 'black'
                    , backgroundColor: 'white', width: '100%',height:50, margin: 0, marginTop: 10
                }}>

                    <SearchBar
                        height={44}
                        margin={2}
                        fontSize={24}
                        fontColor="#fdfdfd"
                        iconColor="#fdfdfd"
                        shadowColor="#282828"
                        cancelIconColor="#fdfdfd"
                        backgroundColor="white"
                        spinnerVisibility={spinnerVisibility}
                        placeholder="Search bar..."
                        fontFamily="BurbankBigCondensed-Black"
                        shadowStyle={styles.searchBarShadowStyle}
                        onChangeText={this.handleOnChangeText}
                    />
                </View>
                {/* //================ 1 st ==================== */}
                <ScrollView horizontal={true}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>

                        <View>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../FlexDemo/image/s30.jpg')} />
                            <Text style={styles.headerTitle}>1/2</Text>
                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../FlexDemo/image/s31.jpg')} />
                            <Text style={styles.headerTitle}>2/3</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../FlexDemo/image/s32.jpg')} />
                            <Text style={styles.headerTitle}>3/1</Text>

                        </View>


                    </View>
                </ScrollView>

                {/* //=========================2 nd===================== */}

                <View>
                    <Text style={styles.headerTitle1}>Get it quickly</Text>

                </View>
                <ScrollView horizontal={true}>

                    <View style={{ flex: 1, flexDirection: 'row', }}>

                        <View>

                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s10.jpg')} />
                            <Text style={styles.headerTitle1}>1</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s11.jpg')} />
                            <Text style={styles.headerTitle1}>2</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s18.jpg')} />
                            <Text style={styles.headerTitle1}>3</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s13.jpg')} />
                            <Text style={styles.headerTitle1}>4</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s14.jpg')} />
                            <Text style={styles.headerTitle1}>5</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s15.jpg')} />
                            <Text style={styles.headerTitle1}>6</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s16.jpg')} />
                            <Text style={styles.headerTitle1}>7</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s17.jpg')} />
                            <Text style={styles.headerTitle1}>8</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s18.jpg')} />
                            <Text style={styles.headerTitle1}>9</Text>

                        </View>
                    </View>
                </ScrollView>


                {/* //========================3 rd====================== */}
                <ScrollView horizontal={true}>

                    <View style={{ flex: 1, flexDirection: 'row', }}>

                        <View>

                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s1.jpg')} />
                            <Text style={styles.headerTitle1}>1</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s2.jpg')} />
                            <Text style={styles.headerTitle1}>2</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s3.jpg')} />
                            <Text style={styles.headerTitle1}>3</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s4.jpg')} />
                            <Text style={styles.headerTitle1}>4</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s5.jpg')} />
                            <Text style={styles.headerTitle1}>5</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s6.jpg')} />
                            <Text style={styles.headerTitle1}>6</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s7.jpg')} />
                            <Text style={styles.headerTitle1}>7</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s8.jpg')} />
                            <Text style={styles.headerTitle1}>8</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo1}
                                source={require('../FlexDemo/image/s9.jpg')} />
                            <Text style={styles.headerTitle1}>9</Text>

                        </View>
                    </View>
                </ScrollView>

                {/* //=====================4 th========================= */}
                <View style={{ flex: 1, flexDirection: 'column', }}>
                    <Text style={styles.headerTitle1}>just try it </Text>


                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/s29.jpg')} />
                        {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/Swiggy1.jpg')} />
                        {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    </View>

                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/s30.jpg')} />
                        {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/s28.jpg')} />
                        {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    </View>

                </View>

                {/* //==================5 th============================ */}
                <ScrollView horizontal={true}>

                    <View style={{ flex: 1, flexDirection: 'row', }}>

                        <View>

                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s20.jpg')} />
                            <Text style={styles.headerTitle1}>1</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s21.jpg')} />
                            <Text style={styles.headerTitle1}>2</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s19.jpg')} />
                            <Text style={styles.headerTitle1}>3</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s24.jpg')} />
                            <Text style={styles.headerTitle1}>4</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s23.jpg')} />
                            <Text style={styles.headerTitle1}>5</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s26.jpg')} />
                            <Text style={styles.headerTitle1}>6</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s27.jpg')} />
                            <Text style={styles.headerTitle1}>7</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s25.jpg')} />
                            <Text style={styles.headerTitle1}>8</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s28.jpg')} />
                            <Text style={styles.headerTitle1}>9</Text>

                        </View>
                    </View>
                </ScrollView>

                {/* //=================== 6 th =========================== */}
                <View style={{ flex: 1, flexDirection: 'column', }}>


                    {/* <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/s29.jpg')} />
                            {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    {/* </View> */}
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/Swiggy1.jpg')} />
                        {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    </View>

                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/s30.jpg')} />
                        {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/s28.jpg')} />
                        {/* <Text style={styles.headerTitle1}>3/1</Text> */}

                    </View>

                </View>
                {/* //=================== 6 th =========================== */}


                <ScrollView horizontal={true}>

                    <View style={{ flex: 1, flexDirection: 'row', }}>

                        <View>

                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s15.jpg')} />
                            <Text style={styles.headerTitle1}>1</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s16.jpg')} />
                            <Text style={styles.headerTitle1}>2</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s18.jpg')} />
                            <Text style={styles.headerTitle1}>3</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s14.jpg')} />
                            <Text style={styles.headerTitle1}>4</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s13.jpg')} />
                            <Text style={styles.headerTitle1}>5</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s15.jpg')} />
                            <Text style={styles.headerTitle1}>6</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s16.jpg')} />
                            <Text style={styles.headerTitle1}>7</Text>

                        </View>
                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s17.jpg')} />
                            <Text style={styles.headerTitle1}>8</Text>

                        </View>

                        <View>
                            <Image
                                style={styles.tinyLogo2}
                                source={require('../FlexDemo/image/s20.jpg')} />
                            <Text style={styles.headerTitle1}>9</Text>

                        </View>
                    </View>
                </ScrollView>


            </View>

        )
    }
}
const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'black',
        textAlign: 'center',
        color: 'white',
        borderWidth: 1,
        width: 70,
        borderRadius: 50,
        alignSelf: 'center',
        borderColor: 'black',
        marginTop: 10


    },
    headerTitle1: {
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: 'white',
        // textAlign: 'center',
        marginLeft: 20,
        color: 'black',
        // borderWidth: 1,
        // width: 70,
        // borderRadius: 50,
        // alignSelf: 'center',
        borderColor: 'black',
        marginTop: 10


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
        borderRadius: 100,
        backgroundColor: 'teal',
        margin: 10
    },
    tinyLogo: {
        width: 340,
        height: 180,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        // resizeMode: 'center',
        borderRadius: 10,
        backgroundColor: 'teal',
        marginTop: 30,
        marginLeft: 15

    },

    tinyLogo2: {
        width: 140,
        height: 160,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        // resizeMode: 'center',
        borderRadius: 10,
        backgroundColor: 'teal',
        margin: 10
    }
    ,
    tinyLogo3: {
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