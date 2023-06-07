import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

// AIzaSyAY7sVCJ0LUQ7WQphY_nmne53uBU_o8GL0
let apiKey = "AIzaSyBu7PSbf35EtfU0Df7vp39h-15r9TiZ4vI"
// let apiKey = "AIzaSyD8FlAop1B8crCX3GENPvdGig9dOgQB0tw"
let client_id = "782975467133-rg37s50ot5kmfdbbtsm8f6chm8ut8u5o.apps.googleusercontent.com"
export default class SocialLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userDetails: {}
        }
    }
    componentDidMount() {
        GoogleSignin.configure(
            {
                "installed": {
                    "client_id": "782975467133-rg37s50ot5kmfdbbtsm8f6chm8ut8u5o.apps.googleusercontent.com",
                     "project_id": "demoproject-359605",
                    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                    "token_uri": "https://oauth2.googleapis.com/token",
                    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs"
                }
            }
        );
    }
    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userDetails: userInfo });
            console.log(userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error)
            } else {
                // some other error happened
                console.log(error)
            }
        }
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Gmail Integration</Text>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.signIn}
                />
            </View>
        )
    }
}
