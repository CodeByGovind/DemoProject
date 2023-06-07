
import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, StatusBar, ScrollView, TextInput, FlatList, ImageBackground } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';
import Chat1 from '../BottomChat/chat';


export default function Chattab({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const names = [
        {
            index: "1",
            name: "Sachin Tendulkar",
            pth: require('../../assets/chatpic.png'),

        },
        {
            index: "2",
            name: "Virat Kohli",
            pth: require('../../assets/chatpic.png'),


        },
        {
            index: "3",
            name: "M.Dhoni",
            pth: require('../../assets/chatpic.png'),

        },
        {
            index: "4",
            name: "KL Rahul",
            pth: require('../../assets/chatpic.png'),

        },
        {
            index: "5",
            name: "Mayank Agarwal",
            pth: require('../../assets/chatpic.png'),

        },
        {
            index: "6",
            name: "Rohit Sharma",
            pth: require('../../assets/chatpic.png'),

        },

    ];

    return (

        <View style={{ flex: 1, backgroundColor: "#0C1220", }}>
            <StatusBar barStyle='light-content' backgroundColor={"#0C1220"} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <ImageBackground source={require('../../assets/whatsappbg.jpeg')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain', }}
                >


                    <View style={{

                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 20,
                        marginVertical: 20,

                    }}>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                style={styles.icon3}
                                source={require('./../../assets/back.png')}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}>@rchana.singh</Text>
                        </View>
                    </View>


                    <View style={{}} >
                        <Searchbar
                            style={{ borderRadius: 10, marginHorizontal: 20, fontFamily: 'PoppinsRegular' }}
                            placeholder="Search Contacts"
                            onChangeText={onChangeSearch}
                            value={searchQuery} />
                    </View>

                    <View >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            style={styles.container}
                            data={names}
                            keyExtractor={(key) => {
                                return key.index;

                            }}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
                                        <View style={styles.listStyle}>
                                            <Image source={item.pth} style={{ height: 40, width: 40, borderRadius: 90 }} />
                                            <Text style={styles.text1}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>

                </ImageBackground>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create(
    {
        image: {
            height: 50,
            width: 50,
            marginHorizontal: 10,
            marginVertical: 10,
        },
        text1: {
            fontSize: 18,
            fontFamily: "PoppinsSemiBold",
            color: '#fff',
            marginHorizontal: 20,
            marginVertical: 7,

        },
        listStyle: {
            flexDirection: 'row',
            marginHorizontal: 10,
            marginVertical: 10,
            marginTop: 40,
            paddingHorizontal: 10,
            //  backgroundColor: '#fcfbfa',
            borderRadius: 10,
            //  elevation:5,
        },
        icon3: {
            height: 27,
            width: 27,
            //  marginTop: 10,
        },
    }
)

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

// const DATA = [
//   {
//     id: '1',
//     name: "Sachin Tendulkar",
//   },
//   {
//     id: '2',
//     name: "Sachin Tendulkar",
//   },
//   {
//     id: '3',
//     name: "Sachin Tendulkar",
//   },
// ];

// const Item = ({ name }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{name}</Text>
//   </View>
// );

// const Chattab = () => {
//   const renderItem = ({ item }) => (
//     <Item title={item.name} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//     color:'#000'
//   },
// });

// export default Chattab;