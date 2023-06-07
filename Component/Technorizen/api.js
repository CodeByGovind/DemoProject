import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Button} from 'react-native';
import axios from 'axios';
import Technorizentest from './Technorizentest';


export default function MyComponent() {
    const [data, setData] = useState([]);
    const [id, setId] = useState('');
    const [status, setStatus] = useState('');
    // const [openId, setopenId] = useState('');
    const [shopId, setShopId] = useState('');
    const [openTime, setOpenTime] = useState('');
    const [closeTime, setCloseTime] = useState('');


    useEffect(() => {
        fetchData()
        Opening()
        Closeing()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://time4me.online/flash_beauty_website/Webservice/get_shop_week_name?user_id=12&slon_id=3');
            setData(response.data.result);
        } catch (error) {
            console.error(error);
        }
    };

    const Opening = async () => {
        try {
            const response = await axios.get('https://time4me.online/flash_beauty_website/Webservice/get_shop_week_open_time?user_id=12&slon_id=3');
            setData(response.data.result);
        } catch (error) {
            console.error(error);
        }
    };

    const Closeing = async () => {
        try {
            const response = await axios.get('https://time4me.online/flash_beauty_website/Webservice/get_shop_week_close_time?user_id=12&slon_id=3');
            setData(response.data.result);
            // console.log(response.data.result);
        } catch (error) {
            console.error(error);
        }
    };


    const updateData = async () => {
        try {
            const response = await axios.put(`https://time4me.online/flash_beauty_website/Webservice/update_slon_week_name?id=${shopId}&status=${status}`);
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };



    const OpenTimeUpdate = async () => {
        try {
            const response = await axios.post(`https://time4me.online/flash_beauty_website/Webservice/update_shop_open_time?id=${shopId}&open_time=${openTime}`);
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };



    const CloseTimeUpdate = async () => {
        try {
            const response = await axios.post(`https://time4me.online/flash_beauty_website/Webservice/update_shop_close_time?id=${shopId}&close_time=${closeTime}`);
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={styles.container}>
            <Technorizentest data={data} />
            {/* <View>
                <TextInput
                style={styles.textInput}
                    placeholder="Enter ID"
                    value={id}
                    onChangeText={(text) => setId(text)}
                />
                <TextInput
                style={styles.textInput}
                    placeholder="Enter Status"
                    value={status}
                    onChangeText={(text) => setStatus(text)}
                />
                <Button title="Update" onPress={updateData} />
            </View>

            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="openId"
                    value={shopId}
                    onChangeText={(text) => shopId(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Open Time"
                    value={openTime}
                    onChangeText={(text) => setOpenTime(text)}
                />
                <Button title="Update" onPress={OpenTimeUpdate} />
            </View>


            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Shop ID"
                    value={shopId}
                    onChangeText={(text) => setShopId(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Close Time"
                    value={closeTime}
                    onChangeText={(text) => setCloseTime(text)}
                />
                <Button title="Update" onPress={CloseTimeUpdate} />
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        width: window.width,
        height: window.height,
        justifyContent: 'center',
    },
    textInput: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        textAlign: 'center',
        fontSize:18,
        // marginVertical: 10,

        margin: 10,
        // marginTop: 20,

    },
})