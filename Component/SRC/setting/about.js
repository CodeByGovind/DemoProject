import * as React from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground, StatusBar, Dimensions, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';


const About = ({ navigation }) => {
    const dimensions = useWindowDimensions()
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
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
              <Text style={{ fontSize: 22,color:'#fff',paddingHorizontal:10}}>About</Text>
            </View>


                <Searchbar
                    style={{ borderRadius: 10, marginHorizontal: 20, fontFamily: 'PoppinsRegular' }}
                    placeholder="search settings"
                    onChangeText={onChangeSearch}
                    value={searchQuery} />

                <View style={styles.border}>

                    <View style={{ flexDirection: 'row',alignItems:'center',marginHorizontal:20,marginVertical:20}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Setting")}
                        >
                            <Image
                                style={styles.icon3}
                                source={require('../../assets/back.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25,fontFamily: 'PoppinsRegular',textAlign:'center'}}>History</Text>
                    </View>

               <View style={{}}>
                    <Text style={styles.text}>Fantasy sports has exploded in popularity
                        since the inception of online gambling at
                        a time when moneycould be exchanged
                        for great prizes. "Ourgoal isn't to compete
                        with every other fantasy game out there,
                        " said Scott Drenenberg, an associate
                        professor and CEO who oversees Sports
                        Fantasy Labs. "We're creating something
                        that's not only fun but also engaging."</Text>
                        </View>
                        <View style={{marginTop:"45%"}}>
                    <Text style={{textAlign:'center',marginHorizontal:140,fontSize:12,marginVertical:100,color:'#246e38'}}>Copyright © 2022
                        Viscus Infotech Ltd.
                        New Palasia, Indore, M.P.  452001</Text>

                        </View>

                </View>



            </ScrollView>

        </View>
    );
};

export default About;

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
        marginLeft: 7,
       
    },

    text: {
        fontSize: 18,
        fontFamily: 'PoppinsRegular',
        textAlign: 'justify',
        marginHorizontal: 30
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginVertical: 5,
        marginHorizontal: 20,
    },
    icon3: {
        height: 25,
        width: 25,
        // marginHorizontal: 20,
        // marginVertical: 10,
    },
    icon1: {
        height: 69,
        width: 70,
    },

})