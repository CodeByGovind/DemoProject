import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const UpdateCustomerForm = ({ customerId }) => {
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('')
    const [account_no, setAccount_no] = useState()
    const [balance, setBalance] = useState()
    const [accounttype, setAccounttype] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUpdateCustomer = async () => {
        try {
            const response = await axios.put(`http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/1348/`, {
                id: id,
                name: name,
                gender: gender,
                account_no: account_no,
                balance: balance,
                accounttype: accounttype,
                email: email,
                password: password,
                email: email,
            });
            console.log(response.data);
            setErrorMessage('');
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to update customer. Please try again later.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="id"
                style={styles.input}
                value={id}
                onChangeText={(text) => setId(text)}
            />
            <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                placeholder="gender"
                style={styles.input}
                value={gender}
                onChangeText={(text) => setGender(text)}
            />
            <TextInput
                placeholder="account_no"
                style={styles.input}
                value={account_no}
                onChangeText={(text) => setAccount_no(text)}
            />
            <TextInput
                placeholder="balance"
                style={styles.input}
                value={balance}
                onChangeText={(text) => setBalance(text)}
            />
            <TextInput
                placeholder="accounttype"
                style={styles.input}
                value={accounttype}
                onChangeText={(text) => setAccounttype(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleUpdateCustomer}>
                <Text style={styles.buttonText}>Update Customer</Text>
            </TouchableOpacity>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        height: 40,
        marginVertical: 10,
        padding: 10,
        borderWidth: 3,
        borderColor: '#ccc',
        borderRadius: 30,
        textAlign: 'center',
        fontSize:20
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: '#2980b9',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    errorMessage: {
        color: '#f00',
        marginTop: 10,
    },
});

export default UpdateCustomerForm;
