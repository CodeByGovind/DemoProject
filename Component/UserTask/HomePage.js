import { Text, View, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React ,{ useState }  from 'react'


// class UserRegistration extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             Name: 'hello',
//             id: 0,
//             Age: 0,
//             Address: 'indore',
//             record: []
//         }
//     }


export default function HomePage({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgreen', borderRadius: 10, borderWidth: 2, borderColor: 'black' }}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 20 }}
                data={this.props.users}
                renderItem={({ item, index }) =>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.tinyLogo1}
                            source={require('../FlexDemo/image/rohit-sharma.jpg')} />
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText2}>{item.id} </Text>
                            <Text style={styles.titleText2}>{index} </Text>
                            <Text style={styles.titleText1}>{item.Name} </Text>
                            <Text style={styles.titleText3}>{item.gender} </Text>
                            <Text style={styles.titleText2}>{item.Age} </Text>
                            <Text style={styles.titleText2}>{item.Address} </Text>

                            <TouchableOpacity
                                style={{
                                    width: 160, height: 70,
                                    backgroundColor: 'red', borderRadius: 10,
                                    borderWidth: 2, borderColor: 'black', justifyContent: 'center'
                                }}
                                onPress={() => navigation.navigate('Add')}

                            >
                                <Text
                                    style={{
                                        fontSize: 28, fontWeight: 'bold', color: 'white',
                                        textAlign: 'center'
                                    }}>
                                    Add</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                }
            >
            </FlatList>
        </View>

    )
}





const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 22,
        
        margin: 10,
        textAlign: 'center',
    },
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
    titleText3: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInputStyle: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 22,
        
        margin: 10,
        textAlign: 'center',
    },
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
        width: 80, tinyLogo1: {
            width: 80,
            height: 80,
            margin: 20,
            resizeMode: 'stretch',
            resizeMode: 'center',
            borderRadius: 15,
            backgroundColor: 'teal',
            margin: 10
        },
    },
})
