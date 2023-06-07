import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'


const Data = [
    {
        stud_id: 1,
        stud_name: "Rahul Sharma",
        stud_rollno: 101,
        stud_course: "BCA",
        stud_fees: 45678.45
    },
    {
        stud_id: 2,
        stud_name: "Raj Sharma",
        stud_rollno: 102,
        stud_course: "MCA",
        stud_fees: 65678.45
    },
    {
        stud_id: 3,
        stud_name: "Vijay Kumar",
        stud_rollno: 103,
        stud_course: "BTech",
        stud_fees: 55678.45
    },
    {
        stud_id: 4,
        stud_name: "Ankit Sharma",
        stud_rollno: 104,
        stud_course: "M.Tech",
        stud_fees: 66678.45
    },
    {
        stud_id: 5,
        stud_name: "Mohit Sharma",
        stud_rollno: 105,
        stud_course: "BCom",
        stud_fees: 35678.45
    },
]
export default function FlatListDemoTask() {
    const [first, setFirst] = useState(Data)
    

    // {
    //     stud_name: "",
    //     stud_rollno: 0,
    //     stud_course: "",
    //     stud_fees: 0.0
    // }
    // const deleteRecord = (gId) => {
    //     const newRecord = first.Data.filter(item => item.stud_id !== gId)
    //     setFirst({
    //         Data : newRecord
    //     })
    // }
    // console.log('newRecord',newRecord);

    const insertRecord = () => {
        setFirst({
            Data: [...first.Data,
            {
                stud_id: Math.random(),
                stud_name: stud_name,
                stud_rollno:stud_rollno ,
                stud_course: stud_course,
                stud_fees: stud_fees
            }]
        })
        // console.log('Data==>',Data)
    }
    // const Store=[...Data]
    // console.log('Store===>',Store);
    return (
        <View>
            <Text style={{
                fontSize: 32, backgroundColor: 'teal',
                color: 'white', textAlign: 'center'
            }}>
                FlatListDemo</Text>
            <TextInput
                placeholder='Student Name'
                style={styles.textInputStyle}
                onChangeText={(e) =>
                    setFirst(e)
                }
            ></TextInput>
            <TextInput
                placeholder='Student Rollno'
                style={styles.textInputStyle}
                onChangeText={(e) =>
                    setFirst(e)
                }
            ></TextInput>
            <TextInput
                placeholder='Student Course'
                style={styles.textInputStyle}
                onChangeText={(e) =>
                    setFirst(e)

                }
            ></TextInput>
            <TextInput
                placeholder='Student Fees'
                style={styles.textInputStyle}
                onChangeText={(e) =>
                    setFirst(e)
                }
            ></TextInput>
            <TouchableOpacity
                style={{
                    width: 160, height: 80,
                    backgroundColor: 'green', borderRadius: 10,
                    borderWidth: 2, borderColor: 'black', justifyContent: 'center'
                }}
                onPress={() => insertRecord()}
            >
                <Text
                    style={{
                        fontSize: 28, fontWeight: 'bold', color: 'white',
                        textAlign: 'center'
                    }}>
                    INSERT</Text>
            </TouchableOpacity>
            <FlatList
                contentContainerStyle={{ paddingBottom: 600 }}
                data={Data}
                renderItem={({ item, index }) =>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../FlexDemo/image/rohit-sharma.jpg')} />
                        <View style={{ flexDirection: 'column', margin: 10 }}>
                            <Text style={styles.titleText1}>{item.stud_name} </Text>
                            <Text style={styles.titleText2}>{item.stud_rollno} </Text>
                            <Text style={styles.titleText2}>{item.stud_course} </Text>
                            <Text style={styles.titleText2}>{item.stud_fees} </Text>
                            {/* <TouchableOpacity
                                style={{
                                    width: 160, height: 80,
                                    backgroundColor: 'red', borderRadius: 10,
                                    borderWidth: 2, borderColor: 'black', justifyContent: 'center'
                                }}

                                onPress={() => deleteRecord(item.stud_id)}
                            >
                                <Text
                                    style={{
                                        fontSize: 28, fontWeight: 'bold', color: 'white',
                                        textAlign: 'center'
                                    }}>
                                    DELETE</Text>
                            </TouchableOpacity> */}
                        </View>

                    </View>
                }
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: '#fff',
        fontSize: 22,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#000',
        margin: 2,
        textAlign: 'center',
    },
    addressText1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleText1: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    titleText2: {
        fontSize: 24,
    },
    tinyLogo1: {
        width: 80,
        height: 80,
        margin: 20,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        // resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        resizeMode: 'center',
        borderRadius: 15,
        backgroundColor: 'teal',
        margin: 10
    },
    tinyLogo: {
        width: 180,
        height: 180,
        // 'cover', 'contain', 'stretch', 'repeat', 'center'
        resizeMode: 'stretch',
        // resizeMode: 'contain'
        // resizeMode: 'cover'
        // resizeMode: 'repeat'
        // resizeMode: 'center',
        borderRadius: 15,
        backgroundColor: 'teal',
        margin: 10
    },
})




