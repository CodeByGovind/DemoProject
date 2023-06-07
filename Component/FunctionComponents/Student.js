import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Student(props) {
    return (
        <View style={{ marginTop: 25 }}>
            <Text style={styles.headerTitle}>Student Ditails</Text>
            <Text style={styles.headerTitle}>Name:{props.name}</Text>
            <Text style={styles.headerTitle}>rollno:{props.rollno}</Text>
            <Text style={styles.headerTitle}>course:{props.course}</Text>
            <Text style={styles.headerTitle}>fee:{props.fee}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'darkblue',
        textAlign: 'center',
        color: 'white'
    }


})