import { View, Text, StyleSheet, useState } from 'react-native'
import React from 'react'

export default function Dashboard() {
    // var ob = { name: 'name', email: 'email', pass: 'pass' }
    // const [data, setData] = useState(ob)
    return (
        <View>
            // <Text style={styles.Text}>{data.name}</Text>
            // // <Text style={styles.Text}>{data.email}</Text>
            // // <Text style={styles.Text}>{data.pass}</Text>
            <Text style={styles.Text}>Dashboard</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        color: 'red',
        fontSize: 33,
        marginTop:50
    },

})