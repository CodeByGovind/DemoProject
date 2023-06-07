import * as React from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground, StatusBar, Dimensions, useWindowDimensions, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';


const Privacy = ({ navigation }) => {
    const dimensions = useWindowDimensions()
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [isToggle, setIsToggle] = useState(false);
   const [toggle, setToggle] = useState(false);
  const [toggle1 , setToggle1] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar />
            <ScrollView contentContainerStyle={{ flex: 1 }}>

            <View style={{flexDirection:'row',marginVertical:20,alignItems:'center',marginHorizontal:10}}>
              <TouchableOpacity
               onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon3}
                source={require('../../assets/back.png')}
              />
                 </TouchableOpacity>
              <Text style={{ fontSize: 22,color:'#fff',paddingHorizontal:10}}>Privacy</Text>
            </View>

                <Searchbar
                    style={{ borderRadius: 10, marginHorizontal: 20, fontFamily: 'PoppinsRegular' }}
                    placeholder="Search Privacy"
                    onChangeText={onChangeSearch}
                    value={searchQuery} />
                <View style={styles.border}>


                    <View style={{marginHorizontal:20,marginVertical:30}}>
                        <View style={{ flexDirection: 'row',alignItems:"center",}}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.icon2}
                                    source={require('../../assets/password.png')}
                                />
                            </TouchableOpacity>
            
                            <Text style={styles.text1} >Change password</Text>
                        </View>

                        <View style={{ flexDirection: 'row',alignItems:"center", }}>
                            <Switch
                            style={{ transform: [{ scaleX: 1.2 }, { scaleY:1.2 }] }}
                                trackColor={{ false: "gray", true: "teal" }}
                                thumbColor="#f9faf5"
                                onValueChange={(value)=>setToggle(value)}
                                value={toggle}
                            />
                           <Text style={styles.text} >Location</Text>

                           

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                        <Switch
                            style={{ transform: [{ scaleX: 1.2 }, { scaleY:1.2 }] }}
                                trackColor={{ false: "gray", true: "teal" }}
                                thumbColor="#f9faf5"
                                onValueChange={(value)=>setIsToggle(value)}
                                value={isToggle}
                            />
                            <Text style={styles.text} >Camera</Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                        <Switch
                            style={{ transform: [{ scaleX: 1.2 }, { scaleY:1.2 }] }}
                                trackColor={{ false: "gray", true: "teal" }}
                                thumbColor="#f9faf5"
                                onValueChange={(value)=>setToggle1(value)}
                                value={toggle1}
                            />
                            <Text style={styles.text} >Microphone</Text>

                        </View>
                       
                        <View style={{ borderBottomWidth: 0.5, marginHorizontal: 30, marginTop: '85%' }}></View>
                    </View>

                </View>


            </ScrollView>

        </View>
    );
};

export default Privacy;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C1220'
    },
    border: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        elevation: 18,
        shadowColor: "#fff",
        marginVertical: 20,
        paddingVertical: 10,
        // marginLeft: 5,

    },
    icon1: {
        height: 69,
        width: 70,
    },
    icon2: {
        height: 30,
        width: 30,
        // marginHorizontal: 30,
        // marginVertical: 15,
    },
    icon3: {
        height: 25,
        width: 25,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    text: {
        fontSize: 20,
        fontFamily: 'PoppinsRegular',
        color: '#000000B2',
        // marginHorizontal: 5,
        marginVertical: 20,
        marginLeft:20,
    },
    text1:{
        fontSize: 20,
        fontFamily: 'PoppinsRegular',
        color: '#000000B2',
        // marginHorizontal: 5,
        paddingVertical:8,
        marginLeft:32,
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginVertical: 5,
        marginHorizontal: 20,
    }

})