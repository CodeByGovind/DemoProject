import React, { useState } from 'react';
import { View, TextInput, Button ,StyleSheet} from 'react-native';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login?', {
        email: email,
        password: password,
      });
      console.log(response.data);
      // do something with the response, e.g. redirect to the main app screen
    } catch (error) {
      console.error(error);
      // handle the error, e.g. display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
        placeholder="Email"
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
      <View style={{margin:20}}>
      <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginForm;
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