import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Player(props) {
    return (
        <View style={{ marginTop: 2 }}>
            <Text style={styles.headerTitle}>Player Ditails</Text>
            <Text style={styles.headerTitle}>Name:{props.name}</Text>
            <Text style={styles.headerTitle}>NoOfOdiMatches:{props.NoOfOdiMatches}</Text>
            <Text style={styles.headerTitle}>NoOftestMatches:{props.NoOftestMatches}</Text>
            <Text style={styles.headerTitle}>score:{props.score}</Text>
            <Text style={styles.headerTitle}>teamname:{props.teamname}</Text>


        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'blue',
        textAlign: 'center',
        color: 'white'
    }


})