import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default class MapDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 22.7196,
                longitude: 75.8577,
                latitudeDelta: 1.001,
                longitudeDelta: 1.001
            },
            markers: [{
                latlng:
                {
                    "latitude": 22.7196,
                    "longitude": 75.8577
                },
                title: "Indore",
                description: "Clean City"
            },
            {
                latlng:
                {
                    "latitude": 23.179,
                    "longitude": 75.784
                },
                title: "Ujjain",
                description: "Mahakaal ki Nagari"
            }]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <View> */}

                <Text style={{ fontSize: 33 }}>MapDemo</Text>
                 <MapView
                    style={styles.map}
                    region={this.state.region}
                >
                    {this.state.markers.map((marker, index) => (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                        // image={require('../Images/droppin.jpg')}
                        />
                    ))}
                    {/* <MapView.Marker
                        coordinate={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude
                        }}
                    // image={require('../Images/droppin.jpg')}
                    /> */}
                    {/* <MapView.Marker
                        coordinate={
                            {
                                "latitude": this.state.region.latitude,
                                "longitude": this.state.region.longitude
                            }}
                        title={"Indore"} /> */}
                {/* <MapView.Marker
                        coordinate={
                            {
                                "latitude": this.state.region.latitude,
                                "longitude": this.state.region.longitude
                            }}
                        title={"Indore"} /> */}
                {/* <MapView.Marker
                        coordinate={{
                            "latitude": 23.179,
                            "longitude": 75.784
                        }}
                        title={"Ujjain"} /> */}
                {/* </MapView> */}
                </MapView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    // map: {
    //     ...StyleSheet.absoluteFillObject,

    // },
});