import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('window');


const Technorizentest = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 22,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
                marginTop: 10,

            }}>Add Timings</Text>
            <Text style={styles.text}>Weekly Close</Text>
            <FlatList
                columnWrapperStyle={styles.flatListHomeContentContainerStyle}
                numColumns={3}
                horizontal={false}
                data={data}
                renderItem={({ item, index }) =>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}> {item.week_name} </Text>
                        </TouchableOpacity>
                    </View>
                }
            >
            </FlatList>
            <Text style={styles.text}>Open Timings</Text>
            <FlatList
                columnWrapperStyle={styles.flatListHomeContentContainerStyle}
                numColumns={3}
                horizontal={false}
                data={data}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}> {item.week_name} </Text>
                            <Text style={styles.buttonText}> {item.open_time} </Text>
                        </TouchableOpacity>
                    </View>
                }
            >
            </FlatList>
            <Text style={styles.text}>Close Timings</Text>
            <FlatList
                columnWrapperStyle={styles.flatListHomeContentContainerStyle}
                numColumns={3}
                horizontal={false}
                data={data}
                renderItem={({ item }) =>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}> {item.week_name} </Text>
                            <Text style={styles.buttonText}> {item.close_time} </Text>

                        </TouchableOpacity>
                    </View>
                }
            >
            </FlatList>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText1}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Technorizentest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: window.width,
        height: window.height
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white',
        marginTop: 8,
        marginLeft: 15

    },
    button: {
        width: '80%',
        backgroundColor: 'grey',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        margin: 20,
        marginRight: 10

    },
    button1: {
        backgroundColor: 'orange',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        margin: 10,
        marginTop: 20,

    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        paddingHorizontal: 15,
        padding: 2,

    },
    buttonText1: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10
    },
})