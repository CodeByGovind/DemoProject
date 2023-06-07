import { Button, Text, View, FlatList, Image, StyleSheet, ActivityIndicator }
    from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './Action'
import LinearGradient from 'react-native-linear-gradient'

class UserDetails extends Component {

    render() {
        const { loading } = this.props
        console.log("Loading:", loading)
        if (loading === true) {
            return <View>
                <Button title='Download'
                    onPress={() => this.props.getUserDetails()}></Button>
                <ActivityIndicator size="large" color="red" />
            </View>
        } else {
            return (
                
                <View style={{flex:1}}>
                    <LinearGradient
                    colors={['#33ccff', '#ff99cc']}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <Button title='Download'
                        onPress={() => this.props.getUserDetails()}></Button>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 20 }}
                        data={this.props.users}
                        renderItem={({ item, index }) =>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../FlexDemo/image/userlogo.jpg')}
                                />
                                    <View style={{ flexDirection: 'column', margin: 10 }}>
                                    <Text style={styles.titleText1}>{item.name} </Text>
                                    <Text style={styles.titleText2}>{item.username} </Text>
                                    <Text style={styles.titleText2}>{item.email} </Text>
                                    <Text style={styles.titleText2}>{item.address.city} </Text>
                                </View>
                            </View>
                        }
                    >
                    </FlatList>
                    </LinearGradient>
                </View>
            )
        }
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
        fontSize: 24,
    },
    tinyLogo: {
        width: 120,
        height: 120,
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
    container: {
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20
    }
})

// const mapStateToProps = state => {
//     return {
//         loading: state.loading,
//         users: state.users,
//         error: state.error
//     }
// }
const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        users: state.user.users,
        error: state.user.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserDetails: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)
