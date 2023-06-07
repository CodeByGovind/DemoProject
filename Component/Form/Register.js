import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('')
    const [account_no, setAccount_no] = useState()
    const [balance, setBalance] = useState()
    const [accounttype, setAccounttype] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register', {
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
            // do something with the response, e.g. redirect to a success page
        } catch (error) {
            console.log(error);
            // handle the error, e.g. display an error message to the user
        }
    };

    return (
        <View style={styles.container}>
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
            <View style={{ margin: 20 }} >
                <Button title="Register" onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default RegisterForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
    },
    input: {
        margin: 15,
        padding: 7,
        fontSize: 20,
        textAlign: 'center',
        borderColor: '#687',
        borderWidth: 3,
        borderRadius: 30,
    }
})