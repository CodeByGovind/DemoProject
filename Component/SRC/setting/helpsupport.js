import * as React from 'react';
import { View, Image, StyleSheet, Button, Text, ImageBackground, StatusBar, Dimensions, useWindowDimensions,ScrollView,TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';


const Helpsupport = ({ navigation }) =>{
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
              <Text style={{ fontSize: 22,color:'#fff',paddingHorizontal:10}}>Help & Support</Text>
            </View>


                <Searchbar
                    style={{ borderRadius: 10, marginHorizontal: 20, fontFamily: 'PoppinsRegular' }}
                    placeholder="Help & Support"
                    onChangeText={onChangeSearch}
                    value={searchQuery} />

                <View style={styles.border}>

                    <Text style={{ fontSize: 25,fontFamily: 'PoppinsRegular',marginVertical:10,paddingHorizontal:20}}>Select topic</Text>

                    <View style={{ flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image
                                style={styles.icon2}
                                source={require('../../assets/user.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate("Appearence")}
                        >
                            <Text style={styles.text} >change password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.icon2}
                                source={require('../../assets/money.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
          
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Appearence")}
                        >
                            <Text style={styles.text} >Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.icon2}
                                source={require('../../assets/withdraw.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
        
                        </TouchableOpacity>
                        <TouchableOpacity
                        // onPress={() => navigation.navigate("Appearence")}
                        >
                            <Text style={styles.text} >Camera</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderBottomWidth:0.5,marginHorizontal: 30,borderColor:'gray',marginTop:'80%'}}></View> 
                </View>



            </ScrollView>

        </View>
    );
};

export default Helpsupport;
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
        paddingVertical: 20,
        marginLeft: 7,
    },
    icon1: {
        height: 69,
        width: 70,
    },
    icon2: {
        height: 40,
        width: 40,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    icon3: {
        height: 25,
        width: 25,
        // marginHorizontal: 20,
        // marginVertical: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: 'PoppinsRegular',
        color: '#000000B2',
        // marginHorizontal: 10,
        marginVertical: 15,
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginVertical: 5,
        marginHorizontal: 20,
    }

})