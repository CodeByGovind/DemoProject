import { Text, View, StyleSheet, TextInput, FlatList, Image } from 'react-native'
import React, { Component } from 'react'
import UserDetails from './mock-data.json'

export default class SearchbarTextInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: UserDetails,
            user: ""
        }
    }
    handleSearch = (e) => {
        this.setState({
            user: e
        })
        if (this.state.user !== "") {
            const newData = UserDetails.filter((user) => {
                return Object.values(user).join('').toLowerCase().includes(this.state.user.toLowerCase())
            })
            console.log(newData)
            this.setState({
                userData: newData
            })
        } else {
            this.setState({
                userData: UserDetails
            })
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder='Search with Name,Email,Phone'
                    style={styles.textStyle}
                    onChangeText={this.handleSearch}
                >
                </TextInput>
                {/* <Text>SearchbarTextInput</Text> */}
                <FlatList
                    contentContainerStyle={{ paddingBottom: 20 }}
                    data={this.state.userData}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../FlexDemo/image/userlogo.jpg')}
                            />
                            <View>

                                <Text style={styles.titleText1}>{item.first_name}</Text>
                                <Text style={styles.titleText2}>{item.last_name}</Text>
                                <Text style={styles.titleText2}>{item.email}</Text>
                                <Text style={styles.titleText2}>{item.phone}</Text>
                            </View>


                        </View>

                    }
                >
                </FlatList>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        margin: 5,
        borderBottomWidth: 1
    },
    titleText1: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    titleText2: {
        fontSize: 20,
    },
    tinyLogo: {
        width: 100,
        height: 100,
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