import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

//link:https://github.com/michalchudziak/react-native-geolocation

//npm install @react-native-community/geolocation --save
//react-native link @react-native-community/geolocation

//enableHighAccuracy (bool) - Is a boolean representing if to use GPS or not. 
//If set to true, a GPS position will be requested.
// If set to false, a WIFI location will be requested.



import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
export default class LocationDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: 0,
            lon: 0
        }
    }
    location = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords);
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            //if you set "enableHighAccuracy" to true then it will use GPS 
            //and location will be accurate.
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
        );
    }
    
    getAddress = () => {
        // Initialize the module (needs to be done only once)
        Geocoder.init("AIzaSyAY7sVCJ0LUQ7WQphY_nmne53uBU_o8GL0"); // use a valid API key
        // Search by geo-location (reverse geo-code)
        Geocoder.from(this.state.lat, this.state.lon)
            .then(json => {
                var addressComponent = json.results[0].address_components[0];
                console.log(addressComponent);
            })
            .catch(error => console.warn(error));
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={{
                        width: 250, height: 60,
                        marginBottom: 10,
                        backgroundColor: 'teal', justifyContent: 'center',
                        alignItems: 'center', alignSelf: 'center'
                    }}
                    onPress={() => this.location()}>
                    <Text
                        style={{
                            fontSize: 28, fontWeight: 'bold',
                            color: 'white'
                        }}>
                        GetCurrentPosition</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 40, textAlign: "center" }}>Latitude:{this.state.lat}</Text>
                <Text style={{ fontSize: 40, textAlign: "center" }}>Longitude:{this.state.lon}</Text>
                <TouchableOpacity
                    style={{
                        width: 250, height: 60,
                        marginBottom: 10,
                        backgroundColor: 'teal', justifyContent: 'center',
                        alignItems: 'center', alignSelf: 'center'
                    }}
                    onPress={() => this.getAddress()}>
                    <Text
                        style={{
                            fontSize: 28, fontWeight: 'bold',
                            color: 'white'
                        }}>
                        GetAddress</Text>
                </TouchableOpacity>
            </View>
        )
    }
}