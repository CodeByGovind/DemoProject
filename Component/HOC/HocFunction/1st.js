import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Neha from './2nd'


const [show, setShow] = useState(false)

const [name, setName] = useState("Sneha")
const [age, setAge] = useState(34)
const [address, setAdress] = useState('Pune')

function Sneha() {
    return (
        <View>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
                Person 1 Details :-</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                Name :-{name}</Text>
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

export default Neha;