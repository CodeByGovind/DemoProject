import React from "react";
import { StyleSheet, FlatList, Text, StatusBar, Image, View, SafeAreaView, TouchableOpacity, Dimensions, Share, ImageBackground, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';




export default function Event1({ navigation }) {

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
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Hello',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };
    const renderItem=({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.listStyle}>
                    <Image source={item.pth} style={{ height: 40, width: 40, borderRadius: 100 }} />
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <TouchableOpacity onPress={onShare}>
                        <Icon
                            size={25}
                            name="sharealt"
                        >{item.onShare}
                        </Icon>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
    
        );
    }
    
    return (
        <View style={{ flex: 1, }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ImageBackground source={require('../../assets/eventbg.jpeg')} style={{ height: '100%', width: '100%' }}>
                    <FlatList
                        // showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={styles.container}
                        data={names}
                        keyExtractor={(key) => {
                            return key.index;
                        }}
                        renderItem={renderItem}

                        
                    />
                </ImageBackground>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    },
    textStyle: {
        fontSize: 16,
        color: "black",
        fontFamily: 'PoppinsSemiBold',


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
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
    },
    icon3: {
        height: 30,
        width: 30,

    },
    icon1: {
        height: 70,
        width: 70,
    }
});