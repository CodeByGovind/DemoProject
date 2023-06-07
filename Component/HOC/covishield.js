import { Text, View, TouchableOpacity,vacination_type  } from 'react-native'
import React, { Component } from 'react'
import Vaxin from './Vaxin'
class Neha extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
                    Person 2 Details :- </Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                    Name :- {this.props.name}</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                    Age :- {this.props.age}</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                    Address :-{this.props.address}</Text>
{/* //==================================================================== */}


                {vacination_type ? <Text style={{ fontSize: 24, color: 'red', textAlign: 'center' }}> Age is 18+ {"\n"} Allowed to do vaccination{"\n"}<Text style={{
                    fontSize: 24, fontWeight: 'bold',
                    color: 'black', textAlign: 'center'
                }}> Vaccination Type :- covishield</Text></Text>
                    : null}
                <TouchableOpacity
                    style={{ backgroundColor: 'teal' }}

                    onPress={() => this.props.hocOnTrainingProgress()}
                >
                    <Text style={{
                        fontSize: 32, fontWeight: 'bold',
                        color: 'white', textAlign: 'center'
                    }}>
                        Check Detail
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Vaxin(Neha, 6)