import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function PhoneSignIn() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
        console.log("hello")
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
            console.log('hiii')
        } catch (error) {
            console.log('Invalid code.');
        }
    }

    if (!confirm) {
        return (
            <Button
                title="Phone Number Sign In"
                onPress={() => signInWithPhoneNumber('+91 90099 61036')}
            />
        );
    }

    return (
        <>
            <TextInput value={code} onChangeText={text => setCode(text)} />
            <Button title="Confirm Code" onPress={() => confirmCode()} />
        </>
    );
}