import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Sneha from './1st'

const [name, setName] = useState("Neha")
const [age, setAge] = useState(17)
const [address, setAdress] = useState('indore')
const [show, setShow] = useState(false)



function Neha() {
    return (
        <View>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
                Person 1 Details :-</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                Name :- setName{name}</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                Age :-{age}</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                Address:-{address}</Text>
            {/* //==================================================================== */}


            {show ? <Text style={{ fontSize: 32, color: 'teal', textAlign: 'center', fontWeight: 'bold' }}> Age is 18+ {"\n"}
                <Text style={{
                    fontSize: 32, fontWeight: 'bold',
                    color: 'green', textAlign: 'center'
                }}>Allowed to do vaccination </Text></Text>
                : null}
            <TouchableOpacity
                style={{ backgroundColor: 'teal' }}
                // onPress={() => this.props.hocOnTrainingProgress()}
                onPress={hideName}

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

export default Sneha;