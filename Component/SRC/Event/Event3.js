import React from "react";
import { StyleSheet, FlatList, Text, StatusBar, Image, View, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';


export default function Event3({ navigation }) {

    const names = [
        {
            index: "1",
            name: "ICC World Cup (Men's)",
            pth: require('../../assets/zim.jpeg'),
            
        },
        {
            index: "2",
            name: "ICC World Cup (W's)",
            pth: require('../../assets/zim.jpeg'),
            

        },
        {
            index: "3",
            name: "ICC T20 World Cup",
            pth: require('../../assets/zim.jpeg'),
           
        },
        {
            index: "4",
            name: "TATA IPL T20",
            pth: require('../../assets/zim.jpeg'),
           
        },
        {
            index: "5",
            name: "ODI World Cup",
            pth: require('../../assets/zim.jpeg'),
            
        },
        {
            index: "6",
            name: "ICC World Cricket League",
            pth: require('../../assets/zim.jpeg'),
            
        },
        {
            index: "7",
            name: "T10 League",
            pth: require('../../assets/zim.jpeg'),
            
        },
        {
            index: "8",
            name: "ICC World Cup Mens",
            pth: require('../../assets/zim.jpeg'),
           
        },
        {
            index: "9",
            name: "ICC World Cup Mens",
            pth: require('../../assets/zim.jpeg'),
           
        },
        {
            index: "10",
            name: "ICC World Cup Mens",
            pth: require('../../assets/zim.jpeg'),
           
        },
    ];
    return (
        <View style={{ flex: 1, }}>
            <FlatList
                // showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.container}
                data={names}
                keyExtractor={(key) => {
                    return key.index;

                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.listStyle}>
                                  <Image source={item.pth} style={{ height: 40, width: 40, borderRadius: 100 }} />
                                  <Text style={{ fontSize:18,fontFamily:''}}>{item.name}</Text>
                                  <TouchableOpacity><Icon
                                    	 size={25}
                                        name="sharealt"
                                    >
                                    </Icon></TouchableOpacity>
                                    
            
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
        // marginTop: StatusBar.currentHeight || 0,

    },
    textStyle: {
        fontSize: 16,
        // marginLeft:-10,
        // // marginRight:-10,
        color: "black",
        fontFamily: 'PoppinsRegular',
        // justifyContent:'space-between'

    },
    textStyle1: {
        fontSize: 16,
        color: "black",
        fontFamily: 'PoppinsRegular',
    },
    listStyle: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
       paddingHorizontal: 10,
        backgroundColor: '#fcfbfa',
        justifyContent: 'space-between',
        borderRadius:10,
        elevation:5,
    },
    icon3: {
        height: 30,
        width: 30,
        // marginVertical:8,
    },
    icon1: {
        height: 70,
        width: 70,
    }
});