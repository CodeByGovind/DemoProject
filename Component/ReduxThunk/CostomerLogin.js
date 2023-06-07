import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { customerLogin } from './Action'
import LinearGradient from 'react-native-linear-gradient'

class CostomerLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    
    handleLogin = () => {
        console.log(this.state)
        this.props.getCustomerDetails(this.state.email, this.state.password)
        // this.props.navigation.navigate('Homepage')
    }

    render() {
        return (
            <View style={{ flex: 1,}}>
                <LinearGradient
                    colors={['#33ccff', '#ff99cc']}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', backgroundColor: 'lightgreen', textAlign: 'center', marginTop: 20 }}>Customer Login </Text>
                    <TextInput
                        placeholder='Enter a Email'
                        style={styles.textStyle}
                        onChangeText={(e) => {
                            this.setState({
                                email: e
                            })
                        }}
                    >
                    </TextInput>
                    <TextInput
                        placeholder='Enter a Password'
                        secureTextEntry={true}
                        style={styles.textStyle}
                        onChangeText={(e) => {
                            this.setState({
                                password: e
                            })
                        }}
                    >
                    </TextInput>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={this.handleLogin}

            // onPress={() => { this.handleLogin(), navigation.navigate("Home Page") }}

                    >
                        <Text style={{ color: 'black', fontSize: 28, textAlign: 'center' }}>
                            Login</Text>
                    </TouchableOpacity>
                </LinearGradient>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 20
    },
    loginBtn: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderWidth: 4,
        borderRadius: 10,
        width: '40%',
        borderColor: 'black',
        marginTop: 20,
        padding: 16
    },
    container:{
        justifyContent:'center' ,height:"100%"
    }
})


const mapStateToProps = state => {
    return {
        loading: state.login.loading,
        details: state.login.users,
        error: state.login.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCustomerDetails: (e, p) => dispatch(customerLogin(e, p))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CostomerLogin)